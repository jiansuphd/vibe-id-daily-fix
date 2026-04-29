module.exports = function(eleventyConfig) {
  // Passthrough Copy
  eleventyConfig.addPassthroughCopy("src/css");

  // Filters
  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};

