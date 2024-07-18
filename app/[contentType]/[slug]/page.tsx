// app/[contentType]/[slug]/page.tsx
import NumenorNexusPage from '@/components/content-page'
import { notFound } from 'next/navigation'
import { getContentData } from "@/lib/api";

export default async function Page({ params }: { params: { contentType: string; slug: string } }) {
    const { contentType, slug } = params

    if (!contentType || !slug) {
        notFound()
    }

    try {
        const pageData = await getContentData(contentType, slug)
        return <NumenorNexusPage {...pageData} contentType={contentType} slug={slug} />
    } catch (error) {
        console.error('Error fetching content:', error)
        notFound()
    }
}