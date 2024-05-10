import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./styles/globals.css";
import "./styles/app.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carent-Admin",
  description: "A one-in-all administrative solution for car rental SMEs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>
        {" "}
        <link rel="icon" href="/images/logo3.png" sizes="32x32" />
        {children}
      </body>
    </html>
  );
}
