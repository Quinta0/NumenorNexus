import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
            <div className="size-6 mr-2">
                <Image
                    priority = {true}
                    src="logo.svg"
                    height={32}
                    width={32}
                    alt="Follow us on Twitter"
                />
            </div>
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
    )
}
