import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {ThemeProvider} from 'next-themes'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cartolinks',
  description: 'Cartolinks Task',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme='system' attribute='class' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
