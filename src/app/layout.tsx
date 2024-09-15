import React from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Barlow } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const unbounded = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Basanets Danil',
  description: 'Portfolio Basanets Danil',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="bg-custom-black flex h-[calc(100dvh)] p-0 m-0 overflow-hidden">
      <body
        className={`${unbounded.className} text-lg flex-1 h-[calc(100dvh)] overflow-x-hidden overflow-y-auto tall:snap-none sm:snap-y sm:snap-mandatory text-white `}
      >
        <NextIntlClientProvider messages={messages}>
          <main className="bg-custom-black tall:snap-none sm:snap-start">{children}</main>
          <Nav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
