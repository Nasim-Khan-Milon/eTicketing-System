import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/ClientProvider";


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
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
