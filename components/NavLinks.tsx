'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <Link
        href="/about"
        className={pathname === '/about' ? 'active' : ''}
        aria-current={pathname === '/about' ? 'page' : undefined}
      >
        About Us
      </Link>
    </nav>
  );
}