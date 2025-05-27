import { useChatGetDataQuery } from "@/api/chatapi";
import { endpoints } from "@/api/endpoints";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { IAnswersRoot } from "../interfaces/answer.interface";
import { useState } from "react";

export const useAnswers = () => {
  const { categoriesId, subCategoriesId, childCategoriesID } = useSelector(
    (state: RootState) => state.categories
  );
  const [suggestions, setSuggestions] = useState("");
  const handleSuggestions = (sugg: string) => {
    setSuggestions(sugg);
  };
  const { data, isLoading, isError, isFetching } = useChatGetDataQuery({
    url: endpoints.chatbot?.answers,
    params: {
      p: 1,
      category: categoriesId,
      subcategory: subCategoriesId,
      childcategory: childCategoriesID,
      page_size: 10,
      search: suggestions,
    },
    tag: "answer",
  });
  const answerdata = data as IAnswersRoot;

  return {
    answerdata,
    isLoading,
    isError,
    isFetching,
    handleSuggestions,
  };
};
