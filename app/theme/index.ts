'use client';

// import { extendTheme, UIStyle } from "@yamada-ui/react";


// const globalStyle: UIStyle = {
//   body: {
//     color: "#333",
//   }
// };

// export const customTheme = extendTheme(globalStyle);

import { extendTheme, UsageTheme } from "@yamada-ui/react"
// import { styles } from './styles'
// import { components } from './components'
// import { tokens } from './tokens'

const customTheme: UsageTheme = {
  body: {
    color: "#333",
  }
}

export const theme = extendTheme(customTheme)()
