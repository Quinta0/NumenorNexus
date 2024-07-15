'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-900 text-gray-100 overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold mb-4 text-gold-500">A Shadow Has Fallen...</h2>
                <p className="text-xl mb-4">Something went wrong in Middle-earth.</p>
                <button
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={() => reset()}
                >
                    Gather your courage and try again
                </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                <Image
                    src="/the-one-ring.svg"
                    alt="One Ring Inscription"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    )
}