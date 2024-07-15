// app/not-found.tsx
export default function NotFound() {
    return (
        <div className="text-center text-gray-800 self-center px-4 mt-10">
            <h2 className="text-4xl mb-5">Page Not Found</h2>
            <p className="text-2xl mb-5">The page you are looking for is as elusive as the One Ring...</p>
            <div className="flex justify-center mb-5">
                <img src="/404.jpeg" alt="The One Ring" className="max-w-xs h-auto" />
            </div>
            <p className="text-lg">Perhaps it has been taken to the depths of Mordor or lost in the Mines of Moria. Either way, it cannot be found.</p>
            <div className="mt-10">
                <a href="/" className="text-xl text-brown-800 no-underline border-2 border-brown-800 py-2 px-5 rounded-lg hover:shadow-lg transition-shadow">
                    Return to the Shire
                </a>
            </div>
        </div>
    )
}
