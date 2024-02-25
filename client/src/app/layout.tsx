import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Stock Control',
  description: 'Aplicacion desarrollada con Django Rest Framework + NextJs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
