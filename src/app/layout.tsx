import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'shaders',
  description: 'shaders sandbox',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn('antialiased', inter.className)}>{children}</body>
    </html>
  );
}
