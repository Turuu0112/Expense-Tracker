"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/components/Context";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <AuthProvider>{children}</AuthProvider>
        </UserContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
