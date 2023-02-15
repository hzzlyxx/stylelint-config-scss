module.exports = {
  "defaultSeverity": "error",
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-rational-order"
  ],
  "plugins": [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties"
  ],
  "customSyntax": "postcss-html",
  "rules": {
    "indentation": 2,
    "string-quotes": "double",
    "number-leading-zero": "never",
    "function-url-quotes": "never",
    "length-zero-no-unit": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "function-comma-space-after": "always",
    "declaration-colon-space-after": "always-single-line",
    "declaration-block-semicolon-newline-after": "always",
    "selector-pseudo-element-colon-notation": "double",
    "selector-combinator-space-before": "always",
    "selector-combinator-space-after": "always",
    "selector-attribute-quotes": "always",
    "selector-list-comma-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "declaration-block-trailing-semicolon": "always",
    "selector-pseudo-element-no-unknown": [
      true,
      {
        "ignorePseudoElements": [
          "/./",
          "v-deep"
        ]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": [
          "/./",
          "global"
        ]
      }
    ],
    "at-rule-no-unknown": null,
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "media-feature-name-no-unknown": [
      true,
      {
        "ignoreMediaFeatureNames": [
          "/^min-/"
        ]
      }
    ],
    "no-empty-source": null,
    "color-function-notation": null,
    "alpha-value-notation": null,
    "import-notation": null,
    "selector-class-pattern": null
  }
}