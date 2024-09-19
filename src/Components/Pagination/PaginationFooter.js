const PaginationFooter = (props) => {
  const {
    limit,
    itemsToDisplay,
    total,
    skip,
    paginationfun,
    currentPage,
    isServer,
  } = props.metaData;
  const NumberOfPages = Math.ceil((isServer ? total : limit) / itemsToDisplay);

  const handleNextClick = () => {
    paginationfun(currentPage + 1, props.metaData);
  };

  const handlePreviousClick = () => {
    paginationfun(currentPage - 1, props.metaData);
  };

  return (
    <div className="w-[100%]">
      Pagination comes here
      <div className="flex justify-center flex-wrap items-center">
        <button
          disabled={currentPage == 1}
          onClick={handlePreviousClick}
          className={
            "border border-solid border-black p-1 bg-black text-white rounded-md mr-3 " +
            (currentPage == 1 ? " opacity-[.5]" : "")
          }
        >
          Previous
        </button>
        <div>
          {new Array(NumberOfPages).fill(0).map((_, i) => {
            return (
              <span
                key={i}
                onClick={() => {
                  paginationfun(i + 1, props.metaData);
                }}
                className={
                  "border border-solid border-black p-1 rounded-md mr-3 cursor-pointer inline-block " +
                  (currentPage === i + 1
                    ? " text-white bg-black "
                    : " bg-white text-black")
                }
              >
                {i + 1}
              </span>
            );
          })}
        </div>
        <button
          disabled={currentPage === NumberOfPages}
          onClick={handleNextClick}
          className={
            "border border-solid border-black p-1 bg-black text-white rounded-md mr-3 " +
            (currentPage == NumberOfPages ? "opacity-[.5]" : "")
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationFooter;
