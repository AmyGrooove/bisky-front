import type { Preview } from "@storybook/react"

import biskyTheme from "./theme"

import "@/theme/colors.scss"
import "@/theme/extra.scss"
import "@/theme/style.scss"
import "@/theme/storybook.scss"

const preview: Preview = {
  parameters: {
    docs: {
      theme: biskyTheme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
