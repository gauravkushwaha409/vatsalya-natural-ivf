"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useUpdateQuery = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = useCallback(
    (key: string, value?: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value && value.length > 0) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return updateQuery;
};

export default useUpdateQuery;
