"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  currentPage: number;
  lastPage: number;
}

export default function Pagination({ currentPage, lastPage }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`?${params.toString()}`);
  };

  const getPages = () => {
    const pages: number[] = [];
    const range = 2; 

    const start = Math.max(1, currentPage - range);
    const end = Math.min(lastPage, currentPage + range);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-center gap-1 mt-10 flex-wrap">

      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        ← Prev
      </button>

      {pages[0] > 1 && (
        <>
          <button
            onClick={() => goToPage(1)}
            className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 hover:bg-gray-50 transition"
          >
            1
          </button>
          {pages[0] > 2 && <span className="px-2 text-gray-400">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`px-3 py-1.5 rounded-lg text-sm border transition ${
            page === currentPage
              ? "bg-green-600 text-white border-green-600 font-semibold"
              : "border-gray-200 hover:bg-gray-50 text-gray-700"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Halaman terakhir + ellipsis */}
      {pages[pages.length - 1] < lastPage && (
        <>
          {pages[pages.length - 1] < lastPage - 1 && (
            <span className="px-2 text-gray-400">...</span>
          )}
          <button
            onClick={() => goToPage(lastPage)}
            className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 hover:bg-gray-50 transition"
          >
            {lastPage}
          </button>
        </>
      )}

      {/* Tombol Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === lastPage}
        className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Next →
      </button>
    </div>
  );
}
