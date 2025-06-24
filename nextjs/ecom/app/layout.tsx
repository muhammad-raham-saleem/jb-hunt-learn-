import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

const popins = Poppins({subsets: ["latin"],
    weight:['400','700']})

export const metadata: Metadata = {
  title: "Ecom",
  description: "Ecommerce Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`poppins.className`}>
        <div className="flex flex-col min-h-screen">
          <NavBar/>
          <main className="flex-grow">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
