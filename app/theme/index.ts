'use client';

import { extendTheme, UIStyle } from "@yamada-ui/react";


const globalStyle: UIStyle = {
  body: {
    color: "#333",
  }
};

export const customTheme = extendTheme(globalStyle);
