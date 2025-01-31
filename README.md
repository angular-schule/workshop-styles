
[![npm](https://img.shields.io/npm/v/@angular-schule/workshop-styles.svg)](https://www.npmjs.com/package/@angular-schule/workshop-styles)
[![The MIT License](https://img.shields.io/badge/license-MIT-yellow.svg)](http://opensource.org/licenses/MIT)

# workshop-styles

Common styles for our workshop projects at Angular.Schule. This package is meant to be used in the workshop example projects only.

**Includes**

- Bootstrap CSS
- Common form styles
    - Angular form styles for `.ng-valid` et al
    - feedback classes `.feedback-error` and `.feedback-success` (and their aliases `.feedback-red` and `.feedback-green`)
- Button styles
    - shortcut aliases for Bootstrap buttons with right margin: `.btn-red`, `.btn-green`, `.btn-yellow`, `.btn-blue`, `.btn-grey`,
    - disabled button style with cursor
- primary color Angular purple


# Install

```
npm install @angular-schule/workshop-styles
```

in `styles.scss`

```
@use '@angular-schule/workshop-styles/index';
```
