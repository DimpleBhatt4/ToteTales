import { Montserrat, Raleway, Poppins, Roboto } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-raleway',
});
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-poppins',
  });
  
  export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400'],
    variable: '--font-roboto',
  });
