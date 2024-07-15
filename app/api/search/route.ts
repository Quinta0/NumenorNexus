import { NextResponse } from 'next/server';
import { getContentList } from '@/lib/api';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q');

        if (!query) {
            return NextResponse.json({ results: [] });
        }

        const contentTypes = ['characters', 'locations', 'events', 'items', 'races'];
        let allResults = [];

        for (const contentType of contentTypes) {
            const items = await getContentList(contentType);
            const filteredItems = items.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
            );
            allResults = [...allResults, ...filteredItems.map(item => ({ ...item, contentType }))];
        }

        return NextResponse.json({ results: allResults });
    } catch (error) {
        console.error('Search error:', error);
        return NextResponse.json({ error: 'An error occurred during search' }, { status: 500 });
    }
}