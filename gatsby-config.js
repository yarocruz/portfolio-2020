module.exports = {
  siteMetadata: {
    title: `Yaro Cruz Portfolio Site`,
    description: `This is my portfolio, there are many like it, but this one is mine.`,
    author: `@jaycruz`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'svf5gcp',
          families: ['Proximan Nova']
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: false, // This will exclude favicon link tag
        // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
