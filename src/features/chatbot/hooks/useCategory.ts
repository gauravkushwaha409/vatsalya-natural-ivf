import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { ICategoryRoot } from "../interfaces/category.interface";
import { useChatGetDataQuery } from "@/api/chatapi";
import { useDispatch } from "react-redux";
import { setCategories } from "@/store/slices/categorySlice";
import React, { SetStateAction } from "react";

export const useCategory = (
  setSteps: React.Dispatch<SetStateAction<number>>
) => {
  const dispatch = useDispatch();
  const {
    data: chatCategories,
    isError: isErrorCategory,
    isLoading: isLoadingCategory,
    isFetching: isFetchingCategory,
  } = useChatGetDataQuery({
    url: endpoints.chatbot?.category,
    params: {
      p: 1,
      page_size: 20,
    },
    tag: "categories",
  });
  const chatCategoriesData = chatCategories as ICategoryRoot;

  const handleCategoryClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement | null;
    const categoryElement = target?.closest?.("[data-cat-id]");

    if (categoryElement) {
      const categoryId = categoryElement.getAttribute("data-cat-id");
      dispatch(setCategories(categoryId));
      setSteps(1);
    }
  };
  const handleBack = () => {
    setSteps(0);
  };
  return {
    chatCategoriesData,
    isErrorCategory,
    isLoadingCategory,
    isFetchingCategory,
    handleCategoryClick,
    handleBack,
  };
};
