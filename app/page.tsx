// app/page.tsx
'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from 'next/navigation';

export default function LandingPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const router = useRouter();

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();
        setSearchResults(data.results);
    };
  return (
      <div className="flex min-h-[100dvh] flex-col bg-background">
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
          <Link href="/" className="flex items-center justify-center" prefetch={false}>
            <MountainIcon className="size-6 mr-2" />
            <span className="font-bold text-lg">NumenorNexus</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/explore" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Explore
            </Link>
            <Link href="/graph" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Graph View
            </Link>
          </nav>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Explore Middle-earth and Beyond
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Dive into the vast world of J.R.R. Tolkien's legendarium. Discover characters, places, events, and more.
            </p>
              <form onSubmit={handleSearch} className="mt-8 flex w-full items-center rounded-md border border-input bg-background px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-1 focus-within:ring-offset-background">
                  <Input
                      type="search"
                      placeholder="Search the legendarium..."
                      className="block w-full border-0 bg-transparent py-1.5 text-foreground placeholder:text-muted-foreground focus:ring-0 sm:text-sm sm:leading-6"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" variant="ghost" size="icon" className="text-muted-foreground">
                      <SearchIcon className="h-5 w-5" />
                  </Button>
              </form>
              {searchResults.length > 0 && (
                  <div className="mt-4 text-left">
                      <h2 className="text-xl font-semibold mb-2">Search Results:</h2>
                      <ul>
                          {searchResults.map((result) => (
                              <li key={result.id} className="mb-2">
                                  <Link href={`/${result.contentType}/${result.id}`} className="text-blue-500 hover:underline">
                                      {result.name}
                                  </Link>
                                  <p className="text-sm text-gray-600">{result.description}</p>
                              </li>
                          ))}
                      </ul>
                  </div>
              )}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Link
                  href="/characters"
                  className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted/20 px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
              >
                <UsersIcon className="h-6 w-6 text-muted-foreground" />
                <span className="text-muted-foreground group-hover:text-foreground">Characters</span>
              </Link>
              <Link
                  href="/locations"
                  className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted/20 px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
              >
                <GlobeIcon className="h-6 w-6 text-muted-foreground" />
                <span className="text-muted-foreground group-hover:text-foreground">Locations</span>
              </Link>
              <Link
                  href="/events"
                  className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted/20 px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
              >
                <CalendarIcon className="h-6 w-6 text-muted-foreground" />
                <span className="text-muted-foreground group-hover:text-foreground">Events</span>
              </Link>
              <Link
                  href="/artifacts"
                  className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted/20 px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
              >
                <RingIcon className="h-6 w-6 text-muted-foreground" />
                <span className="text-muted-foreground group-hover:text-foreground">Artifacts</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
  )
}

function MountainIcon(props) {
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
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
  )
}

function CalendarIcon(props) {
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
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
  )
}

function RingIcon(props) {
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
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
  )
}

function BookIcon(props) {
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
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
  )
}


function CompassIcon(props) {
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
        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
  )
}


function GlobeIcon(props) {
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
  )
}


function SearchIcon(props) {
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
  )
}


function UsersIcon(props) {
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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