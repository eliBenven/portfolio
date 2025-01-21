// /app/layout.tsx
import Nav from './components/Nav';
import Footer from './components/Footer';
import Head from 'next/head';
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Meta tags */}
        <meta name="description" content="Data Analyst & Developer Portfolio of Eli Benveniste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body className="bg-gray-100">
        <Nav />
        <main className="container mx-auto py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
