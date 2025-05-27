import React from "react";
import { useAnswers } from "../../hooks/useAnswers";
import CategoriesMessage from "./CategoriesMessage";
import CategoriesChatSuggestion from "./CategoriesChatSuggestions";

const Answers = () => {
  const { answerdata, isError, isFetching, isLoading, handleSuggestions } =
    useAnswers();
  console.log(
    "answerdata",
    answerdata?.results?.map((items) => items?.answers)
  );
  return (
    <div className="relative">
      {answerdata?.results?.map((items) => (
        <div>
          <CategoriesMessage message={items?.answers} />
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
