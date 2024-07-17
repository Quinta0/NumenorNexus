import { getContentList } from '@/lib/api';
import Link from 'next/link';
import { ContentType } from '@/types/types';
import { Separator } from "@/components/ui/separator"

export default async function ExplorePage() {
    const contentTypes = ['characters', 'locations', 'events', 'items', 'races', 'artifacts'];
    let allItems: (ContentType & { contentType: string })[] = [];
    let name = "some value"; // replace "some value" with the actual value

    for (const contentType of contentTypes) {
        const items = await getContentList(contentType);
        allItems = [...allItems, ...items.map(item => ({ ...item, contentType: item.contentType }))];
    }

    allItems.sort((a, b) => a.name.localeCompare(b.name));

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const itemsByLetter: { [key: string]: typeof allItems } = {};

    alphabet.forEach(letter => {
        itemsByLetter[letter] = allItems.filter(item => item.name.toUpperCase().startsWith(letter));
    });

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Explore All Content</h1>

            <div className="flex justify-center space-x-2 mb-8">
                {alphabet.map(letter => (
                    <a
                        key={letter}
                        href={`#${letter}`}
                        className={`px-2 py-1 rounded ${
                        itemsByLetter[letter].length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}
                    >
                    {letter}
                    </a>
                ))}
            </div>

            {alphabet.map(letter => (
            <div key={letter} id={letter}>
                {itemsByLetter[letter].length > 0 && (
                    <>
                        <h2 className="text-2xl font-bold mt-8 mb-4">{letter}</h2>
                        <Separator className="mb-4" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {itemsByLetter[letter].map((item) => (
                                <Link href={`/${item.contentType}/${item.id}`} key={`${item.contentType}-${item.id}`}>
                                    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                        <img src={`/${item.imageUrl}`} alt={item.name} className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                            <p className="text-sm text-gray-500 mb-2">{item.contentType}</p>
                                            <p className="text-gray-600 line-clamp-3">{item.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
            ))}
        </div>
    );
}