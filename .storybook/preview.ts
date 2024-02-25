import type { Preview } from "@storybook/react"

import biskyTheme from "./theme"

import "@shared/styles/reusable.scss"
import "@shared/styles/global.scss"
import "./storybook.scss"

const preview: Preview = {
  parameters: {
    docs: { theme: biskyTheme },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/ },
    },
  },
}

export default preview
