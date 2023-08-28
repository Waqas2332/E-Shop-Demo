import Product from "../components/Product";
import { useAppSelector } from "../redux/hooks";

function AllProducts() {
  const products = useAppSelector((state) => state.products.products);
  return (
    <section className="text-gray-600 bg-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
