import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { fetchAllProducts } from "./redux/actions";

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
