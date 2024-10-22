import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SockectProvider from "@/providers/SocketProvider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Head from "next/head";
import { TokenProvider } from "@/providers/TokenProvider";


const roboto = Roboto({ subsets: ["latin"] ,weight:["100","300","400","500","700","900"],variable:"--font-roboto"});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const session = await auth()

  return (
    <html lang="en">

    <SessionProvider session={session}>
      <TokenProvider>
      <SockectProvider>
      
      <body className={cn(
          "font-roboto",
          roboto.variable
        )}>{children}</body>
        </SockectProvider>
        </TokenProvider>
        </SessionProvider>
    </html>
  );
}
