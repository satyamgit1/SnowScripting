import { NextSeo } from 'next-seo'
import { OrganizationJsonLd } from 'next-seo'

export default function SEO({
  title = "Your Default Title",
  description = "Your default meta description",
  canonical = "https://www.snowscripting.com",
  openGraph = {
    type: 'website',
    url: 'https://www.snowscripting.com',
    title: 'Snow Scripting',
    description: '',
    images: [
      {
        url: 'https://www.snowscripting.com/_next/image?url=%2Fsnowslogo.png&w=128&q=75',
        width: 800,
        height: 600,
        alt: 'snow scripting logo',
      },
    ],
    site_name: 'SnowScripting',
  },
//   twitter = {
//     handle: '@yourhandle',
//     site: '@yoursite',
//     cardType: 'summary_large_image',
//   },
  schema = null,
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={openGraph}
        twitter={twitter}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            name: 'theme-color',
            content: '#ffffff',
          },
        ]}
      />
      <OrganizationJsonLd
        url="https://www.snowscripting.com"
        logo="https://www.snowscripting.com/_next/image?url=%2Fsnowslogo.png&w=128&q=75"
        name="SnowScripting"
        sameAs={[
          'https://twitter.com/yourhandle',
          'https://linkedin.com/company/yourcompany',
          'https://facebook.com/yourpage',
        ]}
      />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  )
}