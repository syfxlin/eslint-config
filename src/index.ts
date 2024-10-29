import antfu from "@antfu/eslint-config";
import tailwindcss from "eslint-plugin-tailwindcss";

type OptionsType<F> = F extends (a: infer A) => any ? A : never;
type ConfigsType<F> = F extends (a: any, ...b: infer A) => any ? A : never;

export type Options = OptionsType<typeof antfu> & { tailwindcss?: boolean };
export type Configs = ConfigsType<typeof antfu>;
export type Returns = ReturnType<typeof antfu>;

export default function config(_options?: Options, ..._configs: Configs): Returns {
  const options: Options = {
    ..._options,
    jsx: true,
    test: true,
    react: true,
    gitignore: true,
    formatters: true,
    typescript: true,
    stylistic: _options?.stylistic === false
      ? false
      : {
          quotes: "double",
          indent: 2,
          semi: true,
          ..._options?.stylistic === true ? {} : _options?.stylistic,
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
      "ts/no-empty-object-type": ["off"],
      "ts/consistent-type-imports": ["off"],
      "react/prop-types": ["off"],
      "react/display-name": ["off"],
      "react/no-unknown-property": ["off"],
      "react-hooks/exhaustive-deps": ["off"],
      "react-refresh/only-export-components": ["off"],
      "unicorn/prefer-node-protocol": ["off"],
      "node/prefer-global/process": ["off"],
      ..._options?.rules,
    },
  };
  const configs: Configs = [..._configs];
  if (options.tailwindcss !== false) {
    for (const config of tailwindcss.configs["flat/recommended"]) {
      configs.unshift(config);
    }
    configs.push({
      rules: {
        "tailwindcss/classnames-order": "warn",
        "tailwindcss/enforces-negative-arbitrary-values": "warn",
        "tailwindcss/enforces-shorthand": "warn",
        "tailwindcss/migration-from-tailwind-2": "warn",
        "tailwindcss/no-arbitrary-value": "off",
        "tailwindcss/no-custom-classname": "off",
        "tailwindcss/no-contradicting-classname": "error",
        "tailwindcss/no-unnecessary-arbitrary-value": "warn",
      },
    });
  }
  return antfu(options, ...configs);
}
