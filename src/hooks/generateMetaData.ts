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
  seo: SEOData | null,
  imagesUrls?: ImageData[] | null,
  videoData?: VideoData
): Metadata {
  return {
    title: seo?.metaTitle || "vatsalya",
    description: seo?.metaDescription || "vatsalya",
    openGraph: {
      title: seo?.metaTitle || "vatsalya",
      description: seo?.metaDescription || "vatsalya",
      url: seo?.canonicalUrl || "https://vatsalya.com",
      siteName: "vatsalya",
      images:
        imagesUrls?.map((img) => ({
          url: img.url,
          width: 800,
          height: 600,
        })) || "/main-logo.png",
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
      canonical: seo?.canonicalUrl || "https://vatsalya.com",
      languages: {
        "en-US": "/en-US",
      },
    },
  };
}
