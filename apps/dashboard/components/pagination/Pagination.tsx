/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    nextPageHandler,
    prevPageHandler,
  } from "@helpers/paginationFunctions";
  import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
  
  type Props = {
    page: number;
    totalPages: number;
    setPage: any;
  };
  
  const Pagination = ({ page, totalPages, setPage }: Props) => {
    const nextPage = () => {
      setPage(nextPageHandler(page, totalPages));
    };
  
    const prevPage = () => {
      setPage(prevPageHandler(page));
    };
  
    return (
      <div className="flex flex-row items-center bg-zinc-100 rounded-full p-2 space-x-4">
        {page <= 1 ? (
          <div></div>
        ) : (
          <button onClick={prevPage}>
            <ChevronLeftIcon height={16} width={16} className="text-zinc-500" />
          </button>
        )}
        <p className="text-zinc-900 font-medium">
          {page}
          <span className="text-zinc-500 text-sm uppercase px-4">OF</span>{totalPages}
        </p>
        {page === totalPages ? (
          <div className="flex"></div>
        ) : (
          <button onClick={nextPage}>
            <ChevronRightIcon height={16} width={16} />
          </button>
        )}
      </div>
    );
  };
  
  export default Pagination;