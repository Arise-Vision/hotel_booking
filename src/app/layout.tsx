import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "500", "700", "900"], style: ["normal", "italic"], variable: "--font-poppins"});

export const metadata: Metadata = {
  title: "Power King Hotel",
  description: "Discrover the best hotel in Uganda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="font-normal">
          <Header />
          {children}
          {/* Footer */}
        </main>
      </body>
    </html>
  );
}
