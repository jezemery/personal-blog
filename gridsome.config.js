// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
    siteName: "Hiohzo.com",
    siteUrl: `https://www.hiohzo.com`,
    host: "0.0.0.0",
    titleTemplate: "%s",
    siteDescription: "Technical Consultant",
    icon: {
        favicon: './src/android-chrome-192x192.png',
        sizes: [16, 32, 96, 192]
    },
    plugins: [
        {
            use: "@gridsome/source-filesystem",
            options: {
                path: "journal/**/*.md",
                typeName: "JournalPost",
                resolveAbsolutePaths: true,
                remark: {
                    externalLinksTarget: "_blank",
                    externalLinksRel: ["nofollow", "noopener", "noreferrer"]
                }
            }
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                path: "notes/**/*.md",
                typeName: "Notes",
                resolveAbsolutePaths: true,
                remark: {
                    externalLinksTarget: "_blank",
                    externalLinksRel: ["nofollow", "noopener", "noreferrer"]
                }
            }
        }
    ],
    transformers: {
        remark: {
            plugins: [
                "@gridsome/remark-prismjs"
            ]
        }
    }
};
