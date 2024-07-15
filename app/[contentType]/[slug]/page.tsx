// app/[contentType]/[slug]/page.tsx
import { getContentData } from '@/lib/api'
import NumenorNexusPage from '@/components/content-page'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { contentType: string; slug: string } }) {
    const { contentType, slug } = params

    if (!contentType || !slug) {
        notFound()
    }

    try {
        const pageData = await getContentData(contentType, slug)
        return <NumenorNexusPage {...pageData} />
    } catch (error) {
        console.error('Error fetching content:', error)
        notFound()
    }
}