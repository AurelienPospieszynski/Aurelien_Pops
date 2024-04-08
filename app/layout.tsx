import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { Anek_Telugu } from 'next/font/google';

const anek_Telugu = Anek_Telugu({
  subsets: ['latin'],
  variable: '--font-caption',
});

export const metadata: Metadata = {
  title: 'Aurélien Pospieszynski · Software Engineer',
  description: 'Aurélien Pospieszynski personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          anek_Telugu,
          'font-sans h-full bg-background text-foreground'
        )}
      >
        {children}
      </body>
    </html>
  );
}
