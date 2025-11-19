"use client";
import Link from "next/link";
import { JSX } from "react";

interface BreadcrumbItem {
  name: string;
  link?: string;
  isHome?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string | JSX.Element;
  homeIcon?: JSX.Element;
  className?: string;
  mt?: boolean;
}

function CustomBreadcrumb({
  items,
  separator = ">",
  homeIcon,
  className = "",
  mt,
}: BreadcrumbProps) {
  return (
    <nav className={`flex items-center  ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center  self-stretch  ">
        {items?.map((item: BreadcrumbItem, index: number) => {
          const isLast = index === items.length - 1;

          return (
            <div className="flex items-center" key={index}>
              <li aria-current={isLast ? "page" : undefined} className="">
                {item.link && !isLast ? (
                  <Link
                    href={item.link}
                    className="typography-caption transition-colors duration-200"
                  >
                    {item.isHome && homeIcon ? homeIcon : item.name}
                  </Link>
                ) : (
                  // last item & active
                  <span className="typography-caption text-primary-500 capitalize">
                    {item.name}
                  </span>
                )}
              </li>

              {/* Separator Section  */}
              {!isLast && (
                <li
                  className={`${!mt ? "mt-1" : ""} mx-0.5 typography-caption  `}
                  aria-hidden="true"
                >
                  {separator}
                </li>
              )}
            </div>
          );
        })}
      </ol>
    </nav>
  );
}

export default CustomBreadcrumb;
