// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'basics/boarding',
        'basics/projects',
      ],
    },
    {
      // type: 'category',
      // label: 'Projects',
      // items: [
      //   {
      //     type: 'category',
      //     label: 'Solar',
      //     items: [
      //       'projects/solar/overview',
      //       'projects/solar/bom',
      //       'projects/solar/schematics',
      //       'projects/solar/wiring',
      //       'projects/solar/testing',
      //       'projects/solar/firmware',
      //     ],
      //   },
      //   {
      //     type: 'category',
      //     label: 'Smart Agriculture',
      //     items: [
      //       'projects/smart_agriculture/overview',
      //       'projects/smart_agriculture/bom',
      //       'projects/smart_agriculture/schematics',
      //       'projects/smart_agriculture/calibration',
      //       'projects/smart_agriculture/deployment',
      //       'projects/smart_agriculture/firmware',
      //     ],
      //   },
      // ],
    },

  ],
};

module.exports = sidebars;
