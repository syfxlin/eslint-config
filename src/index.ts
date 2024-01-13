import antfu, { Awaitable, FlatConfigItem, OptionsConfig, UserConfigItem } from "@antfu/eslint-config";

export default function config(options?: OptionsConfig & FlatConfigItem, ...configs: Awaitable<UserConfigItem | UserConfigItem[]>[]): Promise<UserConfigItem[]> {
  return antfu({
    ...options,
    formatters: true,
    typescript: true,
    stylistic: options?.stylistic === false
      ? false
      : {
          quotes: "double",
          indent: 2,
          semi: true,
          ...options?.stylistic === true ? {} : options?.stylistic,
        },
    rules: {
      "curly": ["error", "multi-line", "consistent"],
      "no-console": ["off"],
      "style/brace-style": ["error", "1tbs"],
      "style/operator-linebreak": ["error", "after"],
      "style/jsx-one-expression-per-line": ["off"],
      "style/member-delimiter-style": ["error", { multiline: { delimiter: "semi" }, singleline: { delimiter: "semi" } }],
      "ts/ban-ts-comment": ["off"],
      "ts/consistent-type-imports": ["off"],
      "react/prop-types": ["off"],
      "react/display-name": ["off"],
      "react/no-unknown-property": ["off"],
      "react-refresh/only-export-components": ["off"],
      "unicorn/prefer-node-protocol": ["off"],
      "node/prefer-global/process": ["off"],
      ...options?.rules,
    },
  }, ...configs);
}
