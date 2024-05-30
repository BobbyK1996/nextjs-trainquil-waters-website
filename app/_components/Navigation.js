import Link from 'next/link';

const linkStyles = 'transition-colors hover:text-accent-400';

function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link href="/cabins" className={linkStyles}>
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className={linkStyles}>
            About
          </Link>
        </li>
        <li>
          <Link href="/account" className={linkStyles}>
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
