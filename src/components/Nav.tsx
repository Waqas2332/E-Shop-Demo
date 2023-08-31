import { CiShoppingCart } from "react-icons/ci";
import { useAppSelector } from "../redux/hooks";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const navigate = useNavigate();
  function handleClick() {
    navigate("/cart");
  }
  return (
    <header className="text-gray-600 bg-gray-200 body-font ">
      <div className="container mx-auto flex items-center  flex-wrap p-5  justify-between">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <span className="ml-3 text-xl font-extrabold">UShop</span>
        </Link>
        {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">H</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav> */}
        <button
          onClick={handleClick}
          className="relative w-12 h-12 flex justify-center items-center bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 border-0 py-1 px-3 focus:outline-non text-base  md:mt-0"
        >
          <span className="absolute top-[-12px] text-black left-[35px] w-6 h-6 bg-white rounded-full">
            {cartProducts.length}
          </span>
          <CiShoppingCart size={32} />
        </button>
      </div>
    </header>
  );
}

export default Nav;
