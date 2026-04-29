module.exports = function(eleventyConfig) {
  // Passthrough Copy
  eleventyConfig.addPassthroughCopy({ "00_Meta/src/css": "css" });

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
    return collectionApi.getFilteredByGlob("00_Meta/src/posts/*.md").reverse();
  });

  return {
    pathPrefix: "/vibe-id-daily/",
    dir: {
      input: "00_Meta/src",
      output: "_site",
      includes: "_includes"
    }
  };
};
