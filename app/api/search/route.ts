import { NextResponse } from 'next/server';
import { getContentList } from '@/lib/api';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
        return NextResponse.json({ results: [] });
    }

    const contentTypes = ['characters', 'locations', 'events', 'items', 'races', 'artifacts'];
    let allResults = [];

    for (const contentType of contentTypes) {
        const items = await getContentList(contentType);
        const filteredItems = items.filter(item =>
            // item.name.toLowerCase().includes(query.toLowerCase()) ||
            //item.description.toLowerCase().includes(query.toLowerCase())
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        allResults = [...allResults, ...filteredItems];
    }

    return NextResponse.json({ results: allResults });
}