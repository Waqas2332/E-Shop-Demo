import axios from "axios";

const api = "https://fakestoreapi.com/products";

export const fetchAllProducts = () => axios.get(api);

// export const fetchProduct = (id: string) => axios.get(`${api}/${id}`);
