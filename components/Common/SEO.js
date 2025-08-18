
import Head from 'next/head';

export default function SEO({ 
  title = "SnowScripting | AI-Powered ServiceNow Script Management", 
  description = "Organize, manage, and optimize your ServiceNow scripts with SnowScripting's AI-powered platform.",
  image = "https://www.snowscripting.com/_next/image?url=%2Fsnowslogo.png&w=128&q=75",
  url = "https://www.snowscripting.com",
  keywords = "ServiceNow, script management, developer tools, AI assistant, snow scripting, servicenow scripting, servicenow script, servicenow note, snowscripting",
  logo = "https://www.snowscripting.com/_next/image?url=%2Fsnowslogo.png&w=128&q=75"
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} /> {/* Use logo prop here */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} /> {/* Use logo prop here */}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
