import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addItem, removeItem } from "../redux/slices/cart-slice";

function Cart() {
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const cartProducts = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  return (
    <div className="max-w-screen-md mx-auto p-4">
      {cartProducts.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-2"
        >
          <div className="flex flex-col space-y-2 max-md:space-y-6 justify-center ">
            <div className="w-full max-md:w-1/2">
              <span>{item.title}</span>
            </div>
            <div className="space-x-2 flex">
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="bg-indigo-600 w-8 h-6 text-center text-white rounded-md"
              >
                -
              </button>
              <p>
                <span>{item.quantity}</span>
                <span className="text-gray-500 italic">x</span>
              </p>
              <button
                onClick={() => {
                  dispatch(addItem(item.id));
                }}
                className="bg-indigo-600 w-8 h-6 text-center text-white rounded-md"
              >
                +
              </button>
            </div>
          </div>
          <span>${Math.round(item.price * item.quantity)}</span>
        </div>
      ))}
      <div className="flex justify-end mt-4">
        <span className="font-bold">
          Total Amount: ${Math.round(totalAmount)}
        </span>
      </div>
    </div>
  );
}

export default Cart;
