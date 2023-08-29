import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { fetchAllProducts } from "./redux/actions";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
