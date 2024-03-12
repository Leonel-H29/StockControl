import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Navbar';
import { Toaster } from 'sonner';
import cookieServiceServer from '@/services/cookieServiceServer';

const inter = Inter({ subsets: ['latin'] });
export const dynamic = 'force-dynamic';

//console.log('TOKEN: ', cookieServiceServer.getToken());

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
      <body className={inter.className}>
        <NavBar />

        <main>
          <br />
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-gray-800">
            {children}
            <Toaster richColors position="top-right" />
          </div>
        </main>
      </body>
    </html>
  );
}
