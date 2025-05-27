import React from "react";
import MessagesContainer from "../MessagesContainer";
import { useAnswers } from "../../hooks/useAnswers";
import ChatSuggestion from "../ChatSuggestion";
import CategoriesMessage from "./CategoriesMessage";
import CategoriesChatSuggestion from "./CategoriesChatCategories";

const Answers = () => {
  const { answerdata, isError, isFetching, isLoading, handleSuggestions } =
    useAnswers();
  return (
    <div className="relative">
      {answerdata?.results?.map((items) => (
        <div>
          <CategoriesMessage messages={items?.answers} />
        </div>
      ))}

      <CategoriesChatSuggestion
        answerdata={answerdata}
        handleSuggestions={handleSuggestions}
      />
    </div>
  );
};

export default Answers;
