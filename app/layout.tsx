// /app/layout.tsx
import Nav from './components/Nav';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Eli Benveniste Portfolio',
  description: 'Portfolio of Eli Benveniste',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Nav />
        <main className="container mx-auto py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
