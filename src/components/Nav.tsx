import { CiShoppingCart } from "react-icons/ci";

function Nav() {
  return (
    <header className="text-gray-600 bg-gray-200 body-font ">
      <div className="container mx-auto flex items-center  flex-wrap p-5  justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9 3a1 1 0 0 1 1 1v2h4V4a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1V4a1 1 0 0 1 1-1h4V3zm11.5 3.02l-.3 1.87L17 13h3.5a.5.5 0 0 0 0-1H17l-1.2-5.11a1 1 0 0 0-1-.74H8.21L7.2 2.14A1 1 0 0 0 6.23 2H4a1 1 0 0 0 0 2h1.2l1.74 7.38-1.3 8.05a1 1 0 0 0 .92 1.2h14a1 1 0 0 0 .92-1.21l-1.3-8.04zM8.04 16.15L9 10h6l.96 6.15H8.04z" />
          </svg> */}
          <span className="ml-3 text-xl font-extrabold">UShop</span>
        </a>
        {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">H</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav> */}
        <button className="w-12 h-12 flex justify-center items-center bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300  border-0 py-1 px-3 focus:outline-non text-base mt-4 md:mt-0">
          <CiShoppingCart size={32} />
        </button>
      </div>
    </header>
  );
}

export default Nav;
