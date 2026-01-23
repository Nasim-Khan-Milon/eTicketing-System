import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "E-Ticketing System",
  description: "Book and manage event tickets online easily and securely",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
