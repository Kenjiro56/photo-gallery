import type { Metadata } from "next";
import { UIProvider} from "@yamada-ui/react";
import "./globals.css";
import Footer from "./components/footer";
import SideBar from "./components/sidebar";

export const metadata: Metadata = {
  title: "Kenjiro Gallery",
  description: "Taken by Kenjiro w/ sony α7III",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ja">
        <body>
          <UIProvider>
            {children}
            <SideBar/>
            <Footer />
          </UIProvider>
        </body>
      </html>
  );
}
