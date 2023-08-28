import Product from "../components/Product";
import { useAppSelector } from "../redux/hooks";

function Home() {
  const products = useAppSelector((state) => state.products.products);
  const featuredProducts = products.filter(
    (product) => product.rating.rate > 4.5
  );
  console.log(featuredProducts);
  return (
    <section className="text-gray-600 bg-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-center text-black text-3xl font-semibold my-4">
          Featured Products
        </h2>
        <div className="flex flex-wrap -m-4">
          {featuredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
