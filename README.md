# eslint-config-true [![Build Status](https://travis-ci.org/true/eslint-config.svg?branch=master)](https://travis-ci.org/true/eslint-config-true)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [True](https://true.nl)


## Install

```
$ npm install --save-dev eslint eslint-config-true
```

For the `esnext` version you'll also need Babel's ESLint [parser](https://github.com/babel/babel-eslint) and [plugin](https://github.com/babel/eslint-plugin-babel):

```
$ npm install --save-dev babel-eslint eslint-plugin-babel
```

For `react`, you will also need `eslint-plugin-react`:

```
$ npm install --save-dev eslint-plugin-react
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "true"
	}
}
```

Or to `.eslintrc`:

```json
{
	"extends": "true"
}
```

Supports parsing ES2015, but doesn't enforce it by default.

This package also exposes [`xo/esnext`](esnext.js) if you want ES2015+ rules:

```json
{
	"extends": "true/esnext"
}
```

And [`true/browser`](browser.js) if you're in the browser:

```json
{
	"extends": "true/browser"
}
```

And [`true/react`](react.js) if you want React application to be linted:

```json
{
    "extends": "true/react"
}
```

Or have multiple configs together:

```json
{
    "extends": [
        "true", // base
        "true/esnext", // ES6/7
        "true/react" // React/JSX
    ]
}
```

## License

MIT © [True](https://true.nl)
