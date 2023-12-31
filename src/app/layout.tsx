import type { Metadata } from "next";
import { Inter as FontSans, Kaisei_Decol as FontKai } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontKai = FontKai({
  subsets: ["latin"],
  variable: "--font-kai",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/* default Inter font */}
      <body
        className={cn(
          "dark:bg-zinc-900 dark:text-white bg-zinc-100 text-black",
          fontSans.variable,
          fontKai.variable
        )}
      >
        <Providers>
          <Navigation />
          <main className="lt-xs:px-4 px-8 max-w-5xl mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
