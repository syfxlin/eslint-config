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
      "style/member-delimiter-style": ["error", { multiline: { delimiter: "semi" }, singleline: { delimiter: "semi" } }],
      "ts/ban-ts-comment": ["off"],
      "ts/consistent-type-imports": ["off"],
      ...options?.rules,
    },
  }, ...configs);
}
