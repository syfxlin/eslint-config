# @syfxlin/eslint-config

My ESLint configuration preset, modified based on @antfu/eslint-config.

## Usage

### Install

```shell
pnpm i -D eslint @antfu/eslint-config
```

### Create config file

```javascript
// eslint.config.js (esm)
import config from "@syfxlin/eslint-config";
export default config();

// eslint.config.js (cjs)
const config = require("@syfxlin/eslint-config").default;
module.exports = config();
```

## Maintainer

**@syfxlin/eslint-config** is written and maintained with the help of [Otstar Lin](https://github.com/syfxlin) and the following [contributors](https://github.com/syfxlin/eslint-config/graphs/contributors).

## License

Released under the [MIT](https://opensource.org/licenses/MIT) License.
