import { createContext, useContext } from "react";

const SectionHeadingContext = createContext<{ headings: string } | null>(null);

export function useSectionHeadingContext() {
  const context = useContext(SectionHeadingContext);
  if (!context) {
    throw new Error(
      "useSectionHeadingContext must be used within a SectionHeadingProvider"
    );
  }
  return SectionHeadingContext;
}

export default SectionHeadingContext;
