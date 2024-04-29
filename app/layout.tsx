import type { Metadata } from "next";
import "./globals.css";
import { inter, sora } from "./ui/fonts";
import Sidebar from "./ui/sidebar";
import Image from "next/image";
import Modal from "./ui/modal";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen overflow-hidden ${inter.className}`}>
        <div className="flex h-screen w-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <Sidebar />
          </div>
          <div className="flex-grow p-4 md:overflow-y-auto md:p-4">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={"/logo.svg"}
                width={48}
                height={48}
                alt="Job Ninja Logo"
                className="hue-rotate-[18deg] brightness-125 saturate-150"
              />
              <h1 className={`${sora.className} text-2xl text-slate-400`}>
                <span className="text-white font-black mr-1">Job</span>Ninja
              </h1>
            </div>
            {children}
          </div>
        </div>
        <Modal />
      </body>
    </html>
  );
}
