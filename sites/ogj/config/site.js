const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/oil-&-gas-journal' },
    { provider: 'twitter', href: 'http://twitter.com/ogjonline' },
    { provider: 'facebook', href: 'http://www.facebook.com/ogjonline' },
  ],
  primaryNavItems: [
    { href: '/general-interest', label: 'General Interest' },
    { href: '/exploration-development', label: 'Exploration & Development' },
    { href: '/drilling-production', label: 'Drilling & Production' },
    { href: '/refining-processing', label: 'Refining & Processing' },
    { href: '/pipelines-transportation', label: 'Pipelines & Transportation' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  footerNavItems: [
    { href: '/page/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
    { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  gtmContainer: 'GTM-N253PL7',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:t6qdcjgnqpk',
  },
};
