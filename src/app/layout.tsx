import { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sign up FEE | Typeform',
};

const myFont = localFont({
  src: [
    {
      path: './fonts/ApercuPro-Bold-english.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/ApercuPro-Light-english.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ApercuPro-Light-latin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/ApercuPro-Medium-english.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ApercuPro-Regular-rest.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ApercuPro-Regular-english.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
