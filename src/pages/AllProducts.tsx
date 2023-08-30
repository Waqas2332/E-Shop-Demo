import { useState } from "react";
import Product from "../components/Product";
import { useAppSelector } from "../redux/hooks";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import Filter from "../components/Filter";

function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const status = useAppSelector((state) => state.products.status);
  const filters = useAppSelector((state) => state.products.filters);

  // In case data is not fetched from API
  if (isLoading || status === "idle") {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  // End Data not loaded logic

  let selectedProducts = products;

  // Apply filter logic
  const { category, price, rate } = filters;
  let upperFilteredPrice: number;
  let lowerFilteredPrice: number;
  if (price === "0-50") {
    upperFilteredPrice = 50;
    lowerFilteredPrice = 0;
  } else if (price === "51-100") {
    upperFilteredPrice = 100;
    lowerFilteredPrice = 51;
  } else if (price == "101-200") {
    upperFilteredPrice = 200;
    lowerFilteredPrice = 101;
  } else if (price === " > 200") {
    lowerFilteredPrice = 201;
    upperFilteredPrice = Number.MAX_SAFE_INTEGER;
  }
  console.log(rate);
  if (category || price || rate) {
    if (category) {
      selectedProducts = products.filter(
        (product) => product.category === category
      );
    }

    if (price) {
      selectedProducts = selectedProducts.filter(
        (product) =>
          product.price >= lowerFilteredPrice &&
          product.price <= upperFilteredPrice
      );
    }

    if (rate) {
      selectedProducts = selectedProducts.filter(
        (product) => product.rating.rate > rate
      );
    }
  } else {
    selectedProducts = products;
  }

  //  End Filter Logic

  // Pagination Logic
  const productsPerPage = 8;
  const totalPages = Math.ceil(selectedProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = selectedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // End Pagination Logic
  return (
    <section className="text-gray-600  body-font">
      <div className="container px-5 py-24 mx-auto">
        <Filter />
        {currentProducts.length > 0 ? (
          <div className="flex flex-wrap -m-4 mt-10">
            {currentProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className=" mt-10">
            <p className="text-2xl text-center">No Products Found...</p>
          </div>
        )}
        {totalPages > 0 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ${
                  currentPage === index + 1 ? "bg-blue-600" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${
                currentPage === totalPages ? "cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllProducts;
