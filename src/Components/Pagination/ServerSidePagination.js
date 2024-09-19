import { useState, useEffect, useRef } from "react";
import ProductShimmer from "../ShimmerUI/ProductsShimmer";
import ProductCard from "../InfiniteScroll/ProductCard";
import PaginationFooter from "./PaginationFooter";

const ServerSidePagination = () => {
  const [isLoading, setisLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [metaPageData, setPageMetaData] = useState({});

  const currentPageMeta = useRef(0);

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const handlePagination = (currentPage, metaData) => {
    console.log("ddjwv ", currentPage, metaData);
    setSkip((currentPage - 1) * metaData.itemsToDisplay);
    console.log(skip, "skip");
    currentPageMeta.current = currentPage - 1;
    console.log(currentPageMeta);
    setisLoading(true);
  };
  async function fetchProducts() {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${8}&skip=${skip}`
    );
    const data = await response.json();
    setProducts(data?.products);
    setPageMetaData({
      ...data,
      isServer: true,
      paginationfun: handlePagination,
      currentPage: currentPageMeta.current + 1,
      itemsToDisplay: 8,
    });
    setisLoading(false);
  }
  return (
    <div>
      <p className="font-bold text-center">
        ........................... Scroll down to see pagination
        .......................
      </p>
      {isLoading ? (
        <ProductShimmer />
      ) : (
        <div>
          <div className="flex flex-wrap gap-2 pb-2">
            {products.map((ep) => {
              return <ProductCard productData={ep} />;
            })}
          </div>
          <div>
            <PaginationFooter metaData={metaPageData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServerSidePagination;
