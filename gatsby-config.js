module.exports = {
  siteMetadata: {
    title: `Bear & Lion`,
    name: `Bear & Lion`,
    siteUrl: `https://touchfish.life`,
    description: `Bear & Lion's Blog`,
    hero: {
      heading: `Code. Food. Life.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com`,
      },
      {
        name: `github`,
        url: `https://github.com/`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/c`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
