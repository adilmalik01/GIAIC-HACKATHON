import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SessionProviderWrapper from "./SessionProviderWrapper";
import StoreProviders from "./StoreProvider";
import PageViewTracker from "./components/PageViewTracker/PageViewTracker";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



import { ReactNode } from "react";

export default async function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageViewTracker />
        <SessionProviderWrapper>
          <StoreProviders>
            {children}
          </StoreProviders>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}