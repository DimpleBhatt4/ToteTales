import Link from "next/link";
import React from "react";

const CategorySortBy = ({categoryName, pageName }) => {
  const sortByOptions = [
    { label: "Best selling", value: "best-selling" },
    { label: "Alphabetically, A-Z", value: "asc" },
    { label: "Alphabetically, Z-A", value: "desc" },
    { label: "Price, low to high", value: "low-to-high" },
    { label: "Price, high to low", value: "high-to-low" },
  ];
  return (
    <ul className='absolute bg-white top-[224%] p-4 w-[max-content] z-50 h-[200px]'>
      {sortByOptions.map((item, index) => {
        return (
          <Link
            key={index}
            href={`${
              categoryName
                ? `/category/${categoryName}/?sortBy=${item.value}`
                : `/${pageName}/?sortBy=${item.value}`
            }`}>
            <li className='p-2 hover:text-gray-400'>{item.label}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default CategorySortBy;
