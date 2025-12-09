export const downloadFile = async (url: string, customName?: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Failed to fetch file");

    // Automatically detect file MIME type
    const contentType = response.headers.get("Content-Type") || "";

    // Infer extension if customName not provided
    const ext = contentType.split("/")[1] || "file";

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;

    // Use filename from customName OR URL OR fallback
    const fileName =
      customName || url.split("/").pop()?.split("?")[0] || `download.${ext}`;

    link.download = fileName;
    link.click();

    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Download failed:", error);
  }
};
