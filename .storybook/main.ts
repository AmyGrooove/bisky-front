import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: ["*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: { sass: { implementation: require("sass") } },
    },
  ],
  core: { disableTelemetry: true },
  framework: {
    name: "@storybook/nextjs",
    options: { nextConfigPath: "../next.config.js" },
  },
  docs: { autodocs: "tag" },
  staticDirs: ["../public"],
}

export default config
