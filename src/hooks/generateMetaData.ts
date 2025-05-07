import type { Metadata } from "next";

type SEOData = {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
};

type ImageData = {
  url: string;
};

export function createMetadata(
  seo: SEOData,
  imagesUrls?: ImageData[]
): Metadata {
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: seo.canonicalUrl,
      siteName: "Vatsalaya",
      images: imagesUrls?.map((img) => ({
        url: img.url,
        width: 800,
        height: 600,
      })),
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: seo.canonicalUrl,
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}
