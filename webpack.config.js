const {merge} = require('webpack-merge')
const config = require("./config/config");
const build = require("./config/build");
const serve = require("./config/serve");

module.exports = function ({development}) {
    return merge(config, development ? serve : build);
};
