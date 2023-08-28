import { product } from "../types";
import { useNavigate } from "react-router-dom";

const Product: React.FC<{ product: product }> = ({ product }) => {
  const navigate = useNavigate();
  const handleNavigate = (id: number) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <a className="block relative h-48 overflow-hidden">
          <img
            alt={product.title}
            className="object-cover object-center w-full h-full block"
            src={product.image}
          />
        </a>
        <div className="p-4">
          <h3 className="text-gray-500 text-xs tracking-widest mb-1 uppercase">
            {product.category}
          </h3>
          <h2 className="text-gray-900 text-lg font-medium">
            Ratings: {product.rating.rate}
          </h2>
          <p className="mt-1 text-gray-800 font-semibold">$ {product.price}</p>
          <button
            onClick={() => {
              handleNavigate(product.id);
            }}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
