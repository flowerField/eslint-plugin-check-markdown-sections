# eslint-plugin-check-mark-sections

Check whether the specified chapter exists in the Markdown file

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-check-mark-sections`:

```sh
npm install eslint-plugin-check-mark-sections --save-dev
```

## Usage

Add `check-mark-sections` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "check-mark-sections"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "check-mark-sections/check": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                             | Description                                                                |
| :------------------------------- | :------------------------------------------------------------------------- |
| [check]() | Check whether the specified chapter exists in the Markdown file  |

<!-- end auto-generated rules list -->


