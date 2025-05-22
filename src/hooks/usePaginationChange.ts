import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const usePaginationChange = () => {
  const params = useSearchParams();
  const router = useRouter();
  const page = params.get("page");
  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(page) : 1
  );
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    setCurrentPage(page);
  };

  return { currentPage, handlePageChange };
};

export default usePaginationChange;
