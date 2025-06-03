'use strict'


const {defineConfig} = require("eslint/config")
const js = require("@eslint/js")

module.exports = defineConfig(
    [
        js.configs.recommended,
        {
            rules: {
                semi: "error",
                "prefer-const": "error",
            },
            ignores: [
                "dist"
            ]
        },
    ]
)