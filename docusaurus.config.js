// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mechaxil',
  tagline: 'Documentation for Mechaxil projects and tools',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Mechaxil.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mechaxil', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // 
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap',
  ],

  // Even if you don't use internationalization, you can use this field to set 
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', /**'hu'*/],
    localeConfigs: {
      en: { label: 'English' },
     // hu: { label: 'Magyar' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/Mechaxil/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/Mechaxil/docs/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: ' ',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Banner_Transparent.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Documentations',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://mechaxil.com',
            label: 'Webshop',
            position: 'right',
          },
          // { type: 'localeDropdown', position: 'right' }, // enable later
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/getting-started',
              },
              {
                label: 'Solar Project',
                to: 'docs/solar/overview',
              },
              {
                label: 'Smart Agriculture Project',
                to: 'docs/smart-ag/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/CecTK8quUc',
              },
              {
                label: 'X',
                href: 'https://x.com/mechaxil',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@mechaxil',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/mechaxil/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=61579512782973',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@mechaxil?lang=en',
              },
              {
                label: 'MakerWorld',
                href: 'https://makerworld.com/en/@Mechaxil',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Webshop',
                href: 'https://mechaxil.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mechaxil, Inc. Built with Docusaurus. `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
