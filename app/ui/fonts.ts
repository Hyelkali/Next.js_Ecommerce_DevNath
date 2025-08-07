import { Josefin_Sans } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const josefinSans = Josefin_Sans({
  weight: '400',
  subsets: ['latin'],
});

export const poppins = Poppins({ 
    weight: "400",
    subsets: ['latin'] 
});
export const lusitana = Lusitana({ 
    weight: '700',
    subsets: ['latin'] 
});