import antfu from "@antfu/eslint-config";
import * as ionicPrettierConfig from "@ionic/prettier-config";

export default antfu({
  test: true,
  typescript: {
    tsconfigPath: ["./tsconfig.json", "./tsconfig.node.json"],
  },
  react: true,
  jsx: true,

  formatters: {
    css: "prettier",
    html: "prettier",
    markdown: "prettier",
    prettierOptions: ionicPrettierConfig,
  },
  stylistic: {
    jsx: true,
    semi: true,
    quotes: "single",
    indent: 4,
  },

  jsonc: false,
  yaml: false,
  gitignore: true,

  files: ["src/**/*.ts", "src/**/*.tsx"],
  ignores: [
    "node_modules",
    "**/*.config.{js,ts,mts,cts,mjs,cjs}",
    "**/*.json",
    "**/*.{yaml,yml}",
    "**/*.d.ts",
    "**/*.test.{ts,tsx,js,jsx}",
    "cypress/**/*.*",
    "tests/**/*.*",
  ],
});
