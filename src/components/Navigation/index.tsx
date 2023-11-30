import Link from "next/link"

import { ThemeButton } from './theme-button';
import { Icons } from "../ui/icons";


export function Navigation() {
  return (
    <nav className="font-kai flex justify-between p-4 lt-xs:px-4 px-8 max-w-5xl mx-auto">
      <div className="flex gap-6 items-center">
        <Link href="/" className="text-lg flex items-center gap-1">
          <span>Chess Heat</span>
          <Icons.fire/>
          </Link>
        <div className="spacer p-2"></div>
        <Link href="/profiles" className="hover:text-foreground text-foreground/80 transition-colors">Profiles</Link>
        <Link href="/year-view" className="hover:text-foreground text-foreground/80 transition-colors">Year View</Link>
      </div>
      <div className="flex gap-6 items-center">
        <ThemeButton />
        {/* TODO: show login if not authed, otherwise, profile svg */}
        <Link href="/login" className="hover:text-foreground text-foreground/80 transition-colors">Login</Link>
      </div>
    </nav>
  );
}
