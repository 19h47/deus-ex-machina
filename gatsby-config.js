/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Deus Ex Machina',
        titleTemplate: '%s · God from the machine',
        description: 'Deus Ex Machina, god from the machine',
        url: 'https://www.deusexmachina.19h47.fr',
        image: '/jpg/open-graph-image.jpg',
        twitterUsername: '@19h47',
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Deus Ex Machina`,
                short_name: `Deus`,
                start_url: `/`,
                background_color: `#d54e1a`,
                theme_color: `#000000`,
                display: `standalone`,
                icon: `static/png/favicon.png`,
            },
        },
    ],
};
