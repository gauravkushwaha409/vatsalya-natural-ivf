import React, { SetStateAction } from "react";
import { useSubCatgory } from "../hooks/useSubcategory";

const SubCategoryList: React.FC<{
  setSteps: React.Dispatch<SetStateAction<number>>;
}> = ({ setSteps }) => {
  const {
    chatSubCategoriesData,
    isErrorSubCategory,
    isLoadingSubCategory,
    isFetchingSubCategory,
    handleSubCategoryClick,
  } = useSubCatgory(setSteps);
  return (
    <div>
      <div
        className=" p-2 grid grid-cols-3 gap-5"
        onClick={handleSubCategoryClick}
      >
        {chatSubCategoriesData?.results?.map((items) => (
          <div data-cat-Id={items?.id} className="">
            <div>{items?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryList;
