module.exports = {
    plugins: [
      require('@fullhuman/postcss-purgecss')({
        content: ['./*.html'], // Specify the paths to your HTML files
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
    ]
  }
  