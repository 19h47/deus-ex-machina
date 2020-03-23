/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'DeusExMachina',
        titleTemplate: '%s · The Real Hero',
        description: 'DeusExMachina',
        url: 'https://www.deusexmachina.19h47.fr',
        image: '/jpg/open-graph-image.jpg',
        twitterUsername: '@occlumency',
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `DeusExMachina`,
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
