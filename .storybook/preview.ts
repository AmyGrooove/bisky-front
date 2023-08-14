import type { Preview } from "@storybook/react"

import biskyTheme from "./theme"

import "@/01-shared/themes/colors.scss"
import "@/01-shared/themes/extra.scss"
import "@/07-core/styles/global.scss"
import "./storybook.scss"

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
