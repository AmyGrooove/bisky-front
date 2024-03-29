import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: ["*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-styling",
      options: { sass: { implementation: require("sass") } },
    },
  ],
  core: { disableTelemetry: true },
  framework: { name: "@storybook/nextjs", options: {} },
  docs: { autodocs: "tag" },
  staticDirs: ["../public"],
}

export default config
