// components/GoogleTag.js
import Script from 'next/script';

const GoogleTag = () => (
  <>
    {/* Google tag (gtag.js) */}
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-VEMQREYR15"
    />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VEMQREYR15');
        `,
      }}
    />
  </>
);

export default GoogleTag;