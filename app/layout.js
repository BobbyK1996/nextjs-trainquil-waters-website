import { Josefin_Sans } from 'next/font/google';

import '@/app/_styles/globals.css';

import Header from './_components/Header';

export const metadata = {
  title: { template: '%s: Tranquil Waters', default: 'Tranquil Waters' },
  description:
    'Experience unparalleled luxury and serenity at our exclusive cabin hotel nestled in the heart of the Pyrenees. Enjoy breathtaking mountain views, premium amenities, our amazing hot springs, and world-class service for a perfect getaway. Book your stay today!',
};

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} min-h-screen bg-primary-950 text-primary-100 flex flex-col relative`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="w-full mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
