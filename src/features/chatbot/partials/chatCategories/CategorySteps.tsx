import React, { useState } from "react";
import CategoryLists from "./CategoryLists";
import SubCategoryList from "./SubCategoryList";
import Answers from "./Answers";

const CategorySteps = () => {
  const [step, setStep] = useState(0);
  switch (step) {
    case 0:
      return <CategoryLists setSteps={setStep} />;
    case 1:
      return <SubCategoryList setSteps={setStep} />;
    case 2:
      return <Answers />;
    default:
      break;
  }
  return <div>CategorySteps</div>;
};

export default CategorySteps;
