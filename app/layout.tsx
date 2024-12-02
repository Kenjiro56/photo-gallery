import type { Metadata } from "next";
import { UIProvider} from "@yamada-ui/react";
import { customTheme } from "./theme";
import "./globals.css";

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
          <UIProvider theme={customTheme}>
            {children}
          </UIProvider>
        </body>
      </html>
  );
}
