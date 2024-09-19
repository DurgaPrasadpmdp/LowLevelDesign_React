import ProductCard from "../InfiniteScroll/ProductCard";
import ProductShimmer from "../ShimmerUI/ProductsShimmer";
import PaginationFooter from "./PaginationFooter";
import { useEffect, useState } from "react";

const ClientSidePagination = () => {
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [paginationMetaData, setPaginationMetaData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetchAllProducts();
  }, []);
  const handlePagination = (currentpage, metaData) => {
    setIsloading(true);
    console.log(
      "handle pagination +" + currentpage,
      metaData,
      metaData?.products
    );
    const startIndex = (currentpage - 1) * metaData.itemsToDisplay;

    const EndIndex = currentpage * metaData.itemsToDisplay;

    setPaginatedProducts(metaData?.products.slice(startIndex, EndIndex));
    setPaginationMetaData((paginationMetaData) => {
      console.log({ ...paginationMetaData, currentPage: currentpage });

      return { ...paginationMetaData, currentPage: currentpage };
    });
    setIsloading(false);
  };
  async function fetchAllProducts() {
    const response = await fetch("https://dummyjson.com/products?limit=55");
    const data = await response.json();
    console.log(data);
    setPaginatedProducts(data.products.slice(0, 8));
    setPaginationMetaData({
      total: data.total,
      limit: data.limit,
      skip: data.skip,
      itemsToDisplay: 8,
      paginationfun: handlePagination,
      currentPage: 1,
      products: data.products,
    });
    setIsloading(false);
  }

  return (
    <div>
      <p className="text-center font-bold">
        .................................. Scroll down to see pagination
        ....................................
      </p>
      {isLoading ? (
        <ProductShimmer />
      ) : (
        <>
          <div className="flex gap-2 pb-2 flex-wrap">
            {paginatedProducts.map((ep) => {
              return <ProductCard key={ep.id} productData={ep} />;
            })}
          </div>
          <div>
            <PaginationFooter metaData={paginationMetaData} />
          </div>
        </>
      )}
    </div>
  );
};

export default ClientSidePagination;
