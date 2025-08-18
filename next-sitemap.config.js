module.exports = {
  siteUrl: 'https://www.snowscripting.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/']
      }
    ],
    additionalSitemaps: [
      'https://www.snowscripting.com/sitemap.xml'
    ]
  }
};