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
  } = useCategory(setSteps);
  return (
    <>
      <div
        className=" p-2 grid grid-cols-3 gap-5"
        onClick={handleCategoryClick}
      >
        {chatCategoriesData?.results?.map((items) => (
          <div data-cat-Id={items?.id} className="">
            <Image
              src={items?.image}
              alt={items?.name}
              height={400}
              width={400}
              className=""
            />
            <div>{items?.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryLists;
