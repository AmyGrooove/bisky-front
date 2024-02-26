import { create } from "@storybook/theming/create"

export default create({
  base: "dark",

  // Typography
  fontBase: "Ubuntu",
  fontCode: "monospace",

  brandTitle: "Bisky",
  brandUrl: "https://example.com",
  brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  brandTarget: "_self",

  // Brand
  colorPrimary: "#170E19",
  colorSecondary: "#170E19",

  // UI
  appBg: "#170E19",
  appContentBg: "#170E19",
  appBorderColor: "#472f4d",
  appBorderRadius: 16,

  // Text colors
  textColor: "#ffffff",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#170E19",
  barSelectedColor: "#170E19",
  barBg: "#170E19",

  // Form colors
  inputBg: "#472f4d",
  inputBorder: "#472f4d",
  inputTextColor: "#ffffff",
  inputBorderRadius: 0,
  buttonBg: "#170E19",
})
