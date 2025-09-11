// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mechaxil Docs',
  tagline: 'Documentation for Mechaxil projects and tools',
  favicon: 'img/favicon.ico',

  future: { v4: true },


  url: 'https://docs.mechaxil.com', // was: https://Mechaxil.github.io
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'Mechaxil',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap',
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en' ,'hu'],
    localeConfigs: {
      en: { label: 'English' },
      hu: { label: 'Magyar' },
    },
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // editUrl: 'https://github.com/Mechaxil/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },

        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig: ({

      // Global SEO meta
      metadata: [
        {
          name: 'description',
          content:
            'Mechaxil - open-source electronics docs & kits (HU/EN). Raspberry Pi, ESP32, robotics, smart agriculture.',
        },
        {
          name: 'keywords',
          content:
            'Mechaxil, elektronika, Raspberry Pi Pico, ESP32, robotics, smart agriculture, Hungary, HU docs',
        },
      ],


      image: 'img/mechaxil-og.jpg',

      navbar: {
        title: ' ',
        logo: { alt: 'My Site Logo', src: 'img/Mechaxil.png' },
        items: [
          { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Documentations' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { href: 'https://mechaxil.com', label: 'Webshop', position: 'right' },
          { type: 'localeDropdown', position: 'right' },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Getting Started', to: 'docs/getting-started' },
              { label: 'Solar Project', to: 'docs/solar/overview' },
              { label: 'Smart Agriculture Project', to: 'docs/smart-ag/overview' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.gg/CecTK8quUc' },
              { label: 'X', href: 'https://x.com/mechaxil' },
              { label: 'Youtube', href: 'https://www.youtube.com/@mechaxil' },
              { label: 'Instagram', href: 'https://www.instagram.com/mechaxil/' },
              { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61579512782973' },
              { label: 'TikTok', href: 'https://www.tiktok.com/@mechaxil?lang=en' },
              { label: 'MakerWorld', href: 'https://makerworld.com/en/@Mechaxil' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'Webshop', href: 'https://mechaxil.com' },
              { label: 'About', to: '/about' },
              { label: 'Contact', to: '/contact' },
              { label: 'Mechaxil (Brand Page)', to: '/mechaxil' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Legal info', to: '/legal' },
              { label: 'Licensing', href: '/legal/licensing' },
              { label: 'Privacy', to: '/legal/privacy' },
              { label: 'Terms', to: '/legal/terms' },
              { label: 'Trademarks', to: '/legal/trademarks' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mechaxil. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
  }),
};

export default config;
