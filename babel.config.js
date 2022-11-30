module.exports = {
    presets: [
        ["@babel/preset-env"],
        ["@babel/preset-react"],
        ["@babel/preset-typescript", {
            isTSX: true,
            allExtensions: true
        }]
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", {version: "legacy"}],
        ["@babel/plugin-proposal-class-properties", {loose: true}]
    ],
    targets: {
        chrome: '58',
        ie: '11'
    }
}
