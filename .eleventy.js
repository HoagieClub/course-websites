const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
    // Register plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(syntaxHighlight);

    // Custom filters
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, { zone: "America/New_York" }).toFormat("ccc, MMM d 'at' t ZZZZ");
    });
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "America/New_York" });
    });

    // Pass through static files to output
    eleventyConfig.addPassthroughCopy("./src/static");
    eleventyConfig.addPassthroughCopy("./src/scripts");
    eleventyConfig.addPassthroughCopy("./src/styles/*.css");

    // Customize Markdown library and settings:
    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAnchor, {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "#"
    });
    eleventyConfig.setLibrary("md", markdownLibrary);

    return {
        dir: {
            input: "./src",
            output: "./build"
        }
    };
};
