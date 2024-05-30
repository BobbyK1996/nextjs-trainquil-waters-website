import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      {/* <Image
        src="/logo.png"
        width="60"
        height="60"
        alt="Tranquil Waters Logo"
      /> */}
      <Image src={logo} width="60" quality={100} alt="Tranquil Waters Logo" />
      <span className="text-xl font-semibold text-primary-100">
        Tranquil Waters
      </span>
    </Link>
  );
}

export default Logo;
