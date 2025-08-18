module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.snowscripting.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://yourdomain.com/sitemap.xml',
      'https://yourdomain.com/server-sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml'],
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    if (path.startsWith('/blog')) priority = 0.9;
    if (path.startsWith('/about') || path.startsWith('/services')) priority = 0.8;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}