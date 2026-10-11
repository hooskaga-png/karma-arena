import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KARMA ARENA',
  description: 'Play Your Way.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
