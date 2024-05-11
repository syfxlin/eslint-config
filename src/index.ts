import antfu from "@antfu/eslint-config";

type OptionsType<F> = F extends (a: infer A) => any ? A : never;
type ConfigsType<F> = F extends (a: any, ...b: infer A) => any ? A : never;

export type Options = OptionsType<typeof antfu>;
export type Configs = ConfigsType<typeof antfu>;
export type Returns = ReturnType<typeof antfu>;

export default function config(options?: Options, ...configs: Configs): Returns {
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
      "style/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
      "style/brace-style": ["error", "1tbs"],
      "style/operator-linebreak": ["error", "after"],
      "style/jsx-one-expression-per-line": ["off"],
      "style/multiline-ternary": ["error", "always-multiline", { ignoreJSX: true }],
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
