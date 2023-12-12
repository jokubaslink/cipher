import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";

export const metadata: Metadata = {
  title: "Cipher",
  description: "connecting people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
        <html lang="en">
          <body className="min-h-screen max-w-[1200px] w-full m-auto bg-white-100 border-black border-2">
            {children}
          </body>
        </html>
    </AuthProvider>
  );
}
