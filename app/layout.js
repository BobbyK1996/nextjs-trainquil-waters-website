import '@/app/_styles/globals.css';

import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

export const metadata = {
  title: 'Tranquil Waters',
  description: 'Website for Tranquil Waters; a cabin lodge',
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
