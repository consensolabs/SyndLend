const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Gatsby Serif',
    description: 'my theme',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'zerostaticthemes@gmail.com',
    },
    menuLinks: [
      {
        name: 'About Us',
        link: '/services',
      },
      {
        name: 'Our Team',
        link: '/team',
      },
      {
        name: 'Contacts',
        link: '/testimonials',
      },
      {
        name: 'White Paper',
        link: 'https://drive.google.com/drive/folders/181umW0YGcd7dMRvpm_J_NNWqJ1h6jZgu',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid || 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
