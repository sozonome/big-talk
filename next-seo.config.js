/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Big Talk",
  titleTemplate: "%s | Big Talk",
  defaultTitle: "Big Talk",
  description: "Big talk questions",
  canonical: "https://bigtalk.sznm.dev",
  openGraph: {
    url: "https://bigtalk.sznm.dev",
    title: "Big Talk",
    description: "Big talk questions",
    images: [
      {
        url: "https://og-image.sznm.dev/**Big**%20Talk.png?theme=dark&md=1&fontSize=125px",
        alt: "Big Talk og-image",
      },
    ],
    site_name: "Big Talk",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
