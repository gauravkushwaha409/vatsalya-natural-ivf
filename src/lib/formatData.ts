export function formatDate(dateString: string): string {
  const date = new Date(dateString.replace(/[/]/g, "-")); // Convert to ISO-like format
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
}
