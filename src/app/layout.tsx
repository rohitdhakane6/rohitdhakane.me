import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { fontMono, fontSans } from "@/lib/font";

export const metadata: Metadata = {
  title: "Rohit Dhakane",
  description: "Personal website of Rohit Dhakane",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
