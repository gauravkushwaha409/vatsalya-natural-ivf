import type { Metadata } from "next";

type SEOData = {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
};

type ImageData = {
  url: string;
};
type VideoData = {
  url: string;
  width?: number;
  height?: number;
  type?: string; // e.g., "video/mp4"
};

export function createMetadata(
  seo: SEOData,
  imagesUrls?: ImageData[],
  videoData?: VideoData
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
      videos: videoData
        ? [
            {
              url: videoData.url,
              width: videoData.width || 1280,
              height: videoData.height || 720,
              type: videoData.type || "video/mp4",
            },
          ]
        : undefined,
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
