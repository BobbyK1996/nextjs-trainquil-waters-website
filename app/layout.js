import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

export const metadata = {
  title: 'Tranquil Waters',
  description: 'Website for Trainquil Waters; a cabin lodge',
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
