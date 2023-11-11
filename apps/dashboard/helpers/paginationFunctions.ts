export const nextPageHandler = (page: number, upperLimit: number) => {
    if (page < upperLimit) {
      const nextPage = page + 1;
      return nextPage;
    }
    return page;
  };
  
  export const prevPageHandler = (page: number) => {
    if (page > 1) {
      const prevPage = page - 1;
      return prevPage;
    }
    return page;
  };