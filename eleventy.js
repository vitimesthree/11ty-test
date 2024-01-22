const pluginWebc = require("@11ty/eleventy-plugin-webc");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginWebc);
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
};