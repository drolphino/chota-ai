import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight:['200','300','400','500','600','700','800','900']
});


export const metadata: Metadata = {
  title: "chota - AI powered PDF summarization",
  description: "Saves hours of reading time. Transform lengthy PDF's into clear, accurate summaries in seconds with our advanced AI Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${fontSans.variable} font-sans antialiased`}
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer/>
          </div>
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
