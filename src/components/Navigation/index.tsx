import Link from "next/link"

import { ThemeButton } from './theme-button';


export function Navigation() {
  return (
    <nav className="font-kai flex justify-between p-4 lt-xs:px-4 px-8 max-w-5xl mx-auto">
      <div className="flex gap-6 items-center">
        <Link href="/" className="text-lg">Chess Heat</Link>
        <div className="spacer p-2"></div>
        <Link href="/profiles" className="hover:text-foreground text-foreground/80 transition-colors">Profiles</Link>
        <Link href="/year-view">Year View</Link>
      </div>
      <div className="flex gap-6 items-center">
        <ThemeButton />
        {/* TODO: show login if not authed, otherwise, profile svg */}
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
