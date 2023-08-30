import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Spinner from "../components/Spinner";
import Layout from "../components/Layout";
import { product } from "../types";
import { addToCart } from "../redux/slices/cart-slice";
function ProductDetails() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const params = useParams();
  const cartProducts = useAppSelector((state) => state.cart.products);

  const product = products.find((product) => product.id === Number(params.id));

  if (isLoading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  function handleClick(product: product) {
    const newProduct = {
      id: product.id,
      price: product.price,
      title: product.title,
    };
    dispatch(addToCart(newProduct));
    console.log(cartProducts);
  }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/3 w-full lg:h-auto h-full object-cover object-center rounded"
            src={product?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>

            <p className="leading-relaxed">{product?.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <button
                onClick={() => handleClick(product!)}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
