import PaginationFooter from "./PaginationFooter";
import { useEffect, usestate } from "react";

const ClientSidePagination = () => {
  const [totalProducts, setTotalProducts] = usestate([]);
  const [pagtnationMetaData, setPaginationMetaData] = usestate({});

  useEffect(() => {
    fetchAllProducts();
  }, []);

  async function fetchAllProducts() {
    const response = await fetch("https://dummyjson.com/products?limit=55");
    const data = await response.json();
    setTotalProducts();
    setPaginationMetaData({});
  }

  return (
    <div>
      client side pagination comming soon.....
      <div>
        <PaginationFooter />
      </div>
    </div>
  );
};

export default ClientSidePagination;
