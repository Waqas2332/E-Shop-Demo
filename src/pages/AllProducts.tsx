import { useState } from "react";
import Product from "../components/Product";
import { useAppSelector } from "../redux/hooks";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const status = useAppSelector((state) => state.products.status);
  if (isLoading || status === "idle") {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <section className="text-gray-600  body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {currentProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
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
      </div>
    </section>
  );
}

export default AllProducts;
