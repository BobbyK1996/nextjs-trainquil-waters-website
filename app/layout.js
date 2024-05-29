import '@/app/_styles/globals.css';

import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

export const metadata = {
  title: { template: '%s: Tranquil Waters', default: 'Tranquil Waters' },
  description:
    'Experience unparalleled luxury and serenity at our exclusive cabin hotel nestled in the heart of the Pyrenees. Enjoy breathtaking mountain views, premium amenities, our amazing hot springs, and world-class service for a perfect getaway. Book your stay today!',
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primary-950 text-primary-100">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by Tranquil Waters</footer>
      </body>
    </html>
  );
}

export default RootLayout;
