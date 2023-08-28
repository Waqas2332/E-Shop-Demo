import Product from "../components/Product";
import { useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

function Home() {
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const featuredProducts = products.filter(
    (product) => product.rating.rate > 4.5
  );
  console.log(featuredProducts);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-center text-black text-3xl font-semibold my-4">
          Featured Products
        </h2>
        {isLoading ? (
          <Layout>
            <Spinner />
          </Layout>
        ) : (
          <>
            <div className="flex flex-wrap -m-4">
              {featuredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
            <div className="flex items-center mt-5 text-blue-800 hover:underline  justify-center">
              <Link
                to="/all-products"
                className="flex justify-around items-center "
              >
                View All Products
                <BsFillArrowRightCircleFill className="ms-1" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Home;
