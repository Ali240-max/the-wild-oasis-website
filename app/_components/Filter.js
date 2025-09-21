"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleFilter(filter) {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("capacity", filter);
    const url = `${pathname}?${currentParams.toString()}`;
    router.replace(url, { scroll: false });
  }
  return (
    <div className="border border-primary800 flex max-sm:text-sm">
      <button
        className="px-4 py-2 hover:bg-primary700 cursor-pointer"
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>
      <button
        className="px-4 py-2 hover:bg-primary700 cursor-pointer"
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 guests
      </button>
      <button
        className="px-4 py-2 hover:bg-primary700 cursor-pointer"
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 guests
      </button>
      <button
        className="px-4 py-2 hover:bg-primary700 cursor-pointer"
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
