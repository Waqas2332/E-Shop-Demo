import { useAppSelector } from "../redux/hooks";

function Cart() {
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  return <div>{totalAmount}</div>;
}

export default Cart;
