import { useChatGetDataQuery } from "@/api/chatapi";
import { endpoints } from "@/api/endpoints";
import { setSubCategories } from "@/store/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { ISubCatgoryRoot } from "../interfaces/subCategory.interface";
import { RootState } from "@/store/store";
import { SetStateAction } from "react";

export const useSubCatgory = (
  setSteps: React.Dispatch<SetStateAction<number>>
) => {
  const dispatch = useDispatch();
  const { categoriesId } = useSelector((state: RootState) => state.categories);

  const {
    data: chatSubCategories,
    isError: isErrorSubCategory,
    isLoading: isLoadingSubCategory,
    isFetching: isFetchingSubCategory,
  } = useChatGetDataQuery({
    url: endpoints.chatbot?.subCategory,
    params: {
      p: 1,
      page_size: 40,
      category_id: categoriesId,
    },
    tag: "subCategories",
  });
  const {
    data: chatChildCategories,
    isError: isErrorChildCategory,
    isLoading: isLoadingChildCategory,
    isFetching: isFetchingChildCategory,
  } = useChatGetDataQuery({
    url: endpoints.chatbot?.subCategory,
    params: {
      p: 1,
      page_size: 40,
      category_id: categoriesId,
    },
    tag: "subCategories",
  });
  const chatSubCategoriesData = chatSubCategories as ISubCatgoryRoot;

  const handleSubCategoryClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement | null;
    const categoryElement = target?.closest?.("[data-cat-id]");

    if (categoryElement) {
      const categoryId = categoryElement.getAttribute("data-cat-id");
      dispatch(setSubCategories(categoryId));
      setSteps(2);
    }
  };
  const handleBack = () => {
    setSteps(0);
  };
  return {
    chatSubCategoriesData,
    isErrorSubCategory,
    isLoadingSubCategory,
    isFetchingSubCategory,
    handleSubCategoryClick,
    handleBack,
  };
};
