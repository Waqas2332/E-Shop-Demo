import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

function Orders() {
  const totalAmount = useAppSelector((state) => state.order.order.totalAmount);
  const products = useAppSelector((state) => state.order.order.cartProducts);
  const navigae = useNavigate();

  return (
    <>
      <div className="container text-center flex justify-center">
        <div className="w-[50%] max-sm:w-[100%]">
          <p className="font-bold italic">
            Your order has been successfully dispatched. We appreciate your
            business and can't wait for you to receive your products.
          </p>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto p-4 mt-4">
        <h2 className="font-bold">Order Details : </h2>
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div className="flex flex-col space-y-2 max-md:space-y-6 justify-center ">
              <div className="w-full max-md:w-1/2">
                <span>{item.title}</span>
                <p>
                  (<span>{item.quantity}</span>
                  <span className="text-gray-500 italic">x</span>)
                </p>
              </div>
            </div>
            <span>${Math.round(item.price * item.quantity)}</span>
          </div>
        ))}
        <div className="flex flex-col items-end mt-4">
          <span className="font-bold">
            Total Amount: ${Math.round(totalAmount)}
          </span>
          <button
            onClick={() => navigae("/")}
            className="w-36 flex justify-center items-center mt-4 h-10 text-white rounded-md bg-indigo-600"
          >
            Go To Main Page
          </button>
        </div>
      </div>
    </>
  );
}

export default Orders;
