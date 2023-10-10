import Header from "@/components/header/Header";
import "./globals.css";
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Eric Luna | Portfolio",
  description: "Portfolio de desarrollador Fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_sans.className}><Header/>{children}</body>
    </html>
  );
}
