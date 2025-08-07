import '@/app/ui/global.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: "DevNath Ecommerce",
  description: "An Ecommerce site built with Next.js by Dev.Nath", 
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}
      </body>
    </html>
  );
}
