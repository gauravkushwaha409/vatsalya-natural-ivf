import React, { SetStateAction } from "react";
import { useSubCatgory } from "../../hooks/useSubcategory";
import { FaBackward } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

const SubCategoryList: React.FC<{
  setSteps: React.Dispatch<SetStateAction<number>>;
}> = ({ setSteps }) => {
  const {
    chatSubCategoriesData,
    isErrorSubCategory,
    isLoadingSubCategory,
    isFetchingSubCategory,
    handleSubCategoryClick,
    handleBack,
  } = useSubCatgory(setSteps);
  return (
    <div className="h-full bg-white rounded-t-md">
      <button
        onClick={handleBack}
        className="flex gap-2 items-center p-2 cursor-pointer"
      >
        <IoMdArrowBack />
      </button>
      <div
        className=" p-2 grid grid-cols-3 gap-5"
        onClick={handleSubCategoryClick}
      >
        {chatSubCategoriesData?.results?.map((items) => (
          <div data-cat-Id={items?.id} className="">
            <div className="border border-secondary-500 p-2 text-secondary-500 typography-paragraph-small rounded-lg cursor-pointer">
              {items?.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryList;
