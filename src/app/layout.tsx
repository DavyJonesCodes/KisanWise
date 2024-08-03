import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// Components
import NavBar from "@/components/home/nav-bar";
import { ThemeProvider } from "@/components/home/theme-provider";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KisanWise",
  description:
    "KisanWise - AI-Powered Agricultural Advice Platform providing personalized agricultural advice to farmers in India.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "KisanWise",
    "agriculture",
    "AI",
    "farming",
    "India",
    "sustainable agriculture",
    "food security",
  ],
  authors: [
    { name: "DavyJonesCodes ", url: "https://github.com/DavyJonesCodes" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar></NavBar>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
