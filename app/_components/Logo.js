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
      <Image
        src={logo}
        width={60}
        height={60}
        quality={100}
        alt="Tranquil Waters Logo"
        className="w-16 h-auto" //This is to get rid of a warning in the console "has either width or height modified, but not the other..." height & width prop keeps image file size small
      />
      <span className="text-xl font-semibold text-primary-100">
        Tranquil Waters
      </span>
    </Link>
  );
}

export default Logo;
