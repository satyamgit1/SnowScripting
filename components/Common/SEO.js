import Head from 'next/head';

export default function SEO({ 
  title = "SnowScripting | AI-Powered ServiceNow Script Management", 
  description = "Organize, manage, and optimize your ServiceNow scripts with SnowScripting's AI-powered platform.",
  image = "/assets/images/social-preview.jpg",
  url = "https://www.snowscripting.com",
  keywords = "ServiceNow, script management, developer tools, AI assistant"
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  );
}