import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deeptech Global Tracker",
  description: "Tracking deep-tech companies and news, globally.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
