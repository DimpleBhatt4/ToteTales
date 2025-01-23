'use client'
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import { ProductsProvider } from "@/app/provider/ProductsProvider"; // Correct file path
import { usePathname } from 'next/navigation';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const excludeHeaderFooter = ['/signup','/login', '/verifyemail', '/adminPanel']
  return (
        <ProductsProvider>
          {!excludeHeaderFooter.includes(pathname) && <Header />}
          {children}
          {!excludeHeaderFooter.includes(pathname) && <Footer />}
        </ProductsProvider>
  );
}
