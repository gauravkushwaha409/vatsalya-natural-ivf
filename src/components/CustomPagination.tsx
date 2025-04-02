"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
type PaginationProps = {
  currentPage: number;
  totalItems: number;
  pageCount: number;
  perPage: number;
  onPageChange: (page: number) => void;
};

const CustomPagination = ({
  currentPage,

  pageCount,
  onPageChange,
}: PaginationProps) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(pageCount, start + maxVisible - 1);

    const adjustedStart =
      end - start + 1 < maxVisible ? Math.max(1, end - maxVisible + 1) : start;

    for (let i = adjustedStart; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg text-text-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowLeft className="w-5 h-5" />
          </button>

          {generatePageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-7 h-7 rounded-full text-sm ${
                currentPage === pageNum
                  ? "bg-primary-200 text-white"
                  : "hover:bg-primary/80 text-gray-700 hover:text-white"
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="p-2 rounded-lg text-text-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPagination;
