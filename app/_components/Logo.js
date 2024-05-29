import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <img src="/logo.png" width="60" alt="Tranquil Waters Logo" />
      <span>Trainquil Waters</span>
    </Link>
  );
}

export default Logo;
