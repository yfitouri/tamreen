import Link from "next/link";

export default function Header() {
  const links = [
    ["Home", "/"], ["Explore", "/explore"], ["Community", "/community"], ["Events", "/events"], ["Challenges", "/challenges"], ["About", "/plans"],
  ];
  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/" className="logo"><span className="logo-mark" />Tamreen</Link>
        <div className="nav-links">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <div className="search-pill">⌕ Search Tamreen</div>
          <Link href="/profile" className="avatar" aria-label="Profile" />
        </div>
        <div className="mobile-menu">Menu</div>
      </nav>
    </header>
  );
}
