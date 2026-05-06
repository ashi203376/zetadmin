import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingSupport from "@/components/ui/FloatingSupport";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ZetAdmin - Tổng Đài Đám Mây",
  description: "Tổng đài ảo ZetAdmin PBX - Trả tiền linh hoạt theo tháng, hỗ trợ miễn phí, tích hợp sẵn nhiều tính năng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingSupport />
      </body>
    </html>
  );
}
