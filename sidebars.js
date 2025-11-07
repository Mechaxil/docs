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
      type: 'category',
      label: 'Guides',
      items: [
        'guides/github-how-to',
        'guides/thonny-how-to',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      items: [
        // {
        //   type: 'category',
        //   label: 'Solar',
        //   items: [
        //     'projects/solar/overview',
        //     'projects/solar/bom',
        //     'projects/solar/schematics',
        //     'projects/solar/wiring',
        //     'projects/solar/testing',
        //     'projects/solar/firmware',
        //   ],
        // },
        {
          type: 'category',
          label: 'Smart Watering Pot',
          items: [
            'projects/auto-watering-pot/auto-watering-pot',
            'projects/auto-watering-pot/auto-watering-pot-bom',
            'projects/auto-watering-pot/auto-watering-pot-schematics',
            'projects/auto-watering-pot/auto-watering-pot-calibration',
            'projects/auto-watering-pot/auto-watering-pot-firmware',
            'projects/auto-watering-pot/auto-watering-pot-deployment',
            'projects/auto-watering-pot/auto-watering-pot-conclusion',
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Products',
    //   items: [
    //     //'products/rp2040-pico-w',
    //     //'products/D4184',
    //     //'products/template',
    //   ],
    // },
  ],
};

module.exports = sidebars;
