module.exports = {
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/bioscience', label: 'Bioscience' },
    { href: '/biomedicine', label: 'Biomedicine' },
    { href: '/bioimaging', label: 'Bioimaging' },
    { href: '/biophotonics-techniques', label: 'Biophotonics Techniques' },
    { href: '/biophotonics-tools', label: 'Biophotonics Tools' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/about-us', label: 'About Us' },
  ],
  homeSections: [
    { id: 30198, name: 'Bioscience' },
    { id: 30201, name: 'Biomedicine' },
    { id: 30203, name: 'Bioimaging' },
  ],
  ads: {
    units: {
      BS: {
        path: '/21687441225/BOW/BOW_BS',
        size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
        sizeMapping: [
          { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
          { viewport: [750, 0], size: [728, 90] },
          { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
        ],
      },
      MR: {
        path: '/21687441225/BOW/BOW_MR',
        size: [300, 250],
      },
      HP: {
        path: '/21687441225/BOW/BOW_HP',
        size: [300, 600],
      },
    },
  },
};
