module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: 'ShubU Portfolio',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
