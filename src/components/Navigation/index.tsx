import Link from "next/link"

export function Navigation() {
  return (
    <nav className="flex justify-between p-4 lt-xs:px-4 px-8 max-w-5xl mx-auto">
      <div className="flex gap-6 items-center">
        <Link href="/">Chess Heat</Link>
        <div className="spacer p-2"></div>
        <Link href="/profiles">Profiles</Link>
        <Link href="/year-view">Year View</Link>
      </div>
      <div className="flex gap-6 items-center">
        <div>Dark/Light</div>
        {/* TODO: show login if not authed, otherwise, profile svg */}
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
