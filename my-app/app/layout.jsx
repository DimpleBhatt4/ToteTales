import {montserrat, raleway, poppins, roboto} from './fonts/fonts'
import "./globals.css";


export const metadata = {
    title: "My App",
    description: "An amazing Next.js app",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
          {children}
        </body>
      </html>
    );
  }
  