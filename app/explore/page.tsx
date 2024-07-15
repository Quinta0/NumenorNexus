import { getContentList } from '@/lib/api';
import Link from 'next/link';

export default async function ExplorePage() {
    const contentTypes = ['characters', 'locations', 'events', 'items', 'races', 'artifacts'];
    let allItems = [];

    for (const contentType of contentTypes) {
        const items = await getContentList(contentType);
        allItems = [...allItems, ...items.map(item => ({ ...item, contentType }))];
    }

    allItems.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Explore All Content</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allItems.map((item) => (
                    <Link href={`/${item.contentType}/${item.id}`} key={`${item.contentType}-${item.id}`}>
                        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                                <p className="text-sm text-gray-500 mb-2">{item.contentType}</p>
                                <p className="text-gray-600 line-clamp-3">{item.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}