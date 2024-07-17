// componets/content-page.tsx

import { Separator } from "@/components/ui/separator"
import { Note, Section } from "@/types/types"
import Image from 'next/image'

export default function NumenorNexusPage({ title, content, sections, notes, imageUrl }) {
    return (
        <div className="grid md:grid-cols-[1fr_300px] w-full h-screen ">
            <div className="flex flex-col h-full">
                <div className="prose prose-lg p-8 flex-1 overflow-auto">
                    <h1 className="text-5xl font-bold mb-4">{title}</h1>
                    {imageUrl && (
                        <div className="flex justify-center mb-4 w-8/12 object-scale-down">
                            <Image
                                src={`/${imageUrl}`}
                                alt={title}
                                width={500}
                                height={300}
                                layout="responsive"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    )}
                    {content.map((section, index) => (
                        <div key={index}>
                            <h2 className="text-2xl font-bold my-3.5">{section.heading}</h2>
                            <p className="text-justify">{section.content}</p>
                        </div>
                    ))}
                </div>
                <div className="border-t p-4 flex items-center justify-between sm:[absolute w-full bottom-0 flex]">
                    <div className="flex items-center gap-2">
                        <PencilIcon className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Edit Article</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DownloadIcon className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Download</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full border-l p-8 overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Relevant Sections</h2>
                <div className="space-y-4">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-medium">{section.title}</h3>
                            <p className="text-sm text-muted-foreground text-justify">{section.description}</p>
                        </div>
                    ))}
                </div>
                <Separator className="my-8" />
                <h2 className="text-2xl font-bold mb-4">Notes</h2>
                <div className="space-y-4">
                    {notes.map((note, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-medium">{note.title}</h3>
                            <p className="text-sm text-muted-foreground text-justify">{note.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function DownloadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}

function PencilIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
        </svg>
    )
}

function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
