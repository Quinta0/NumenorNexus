// app/[contentType]/ContentTypePage.tsx

'use client'

import Link from 'next/link'
import { ContentType } from '@/types/types'

export default function ContentTypePage({ contentType, items }: { contentType: string, items: ContentType[] }) {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 capitalize">{contentType}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <Link href={`/${contentType}/${item.id}`} key={item.id}>
                        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                                <p className="text-gray-600 line-clamp-3">{item.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}