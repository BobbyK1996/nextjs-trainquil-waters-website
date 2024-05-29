import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img src="/logo.png" width="60" alt="Tranquil Waters Logo" />
      <span className="text-xl font-semibold text-primary-100">
        Tranquil Waters
      </span>
    </Link>
  );
}

export default Logo;
