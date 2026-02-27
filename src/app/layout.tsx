import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Marketing — The Newsletter for AI-Powered Marketers",
  description:
    "Weekly insights, tools, and strategies for marketers harnessing artificial intelligence. Join 12,000+ subscribers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${outfit.variable} font-body antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </SmoothScroll>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: "var(--font-body)",
              background: "var(--color-bg-inverse)",
              color: "var(--color-text-inverse)",
              border: "none",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
