import React, { SetStateAction } from "react";
import { useCategory } from "../../hooks/useCategory";
import Image from "next/image";

const CategoryLists: React.FC<{
  setSteps: React.Dispatch<SetStateAction<number>>;
}> = ({ setSteps }) => {
  const {
    chatCategoriesData,
    isErrorCategory,
    isLoadingCategory,
    isFetchingCategory,
    handleCategoryClick,
    handleBack,
  } = useCategory(setSteps);
  return (
    <>
      <div className="h-full bg-white rounded-t-md">
        <div
          className=" p-2 grid grid-cols-4 gap-5  "
          onClick={handleCategoryClick}
        >
          {chatCategoriesData?.results?.map((items, index) => (
            <div
              key={index}
              data-cat-Id={items?.id}
              className="  h-18 cursor-pointer"
            >
              <Image
                src={items?.image}
                alt={items?.name}
                height={400}
                width={400}
                className="h-[calc(100%-2rem)] w-full object-contain  mb-2"
              />
              <p className="typography-paragraph-small text-center text-secondary-500">
                {items?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryLists;
