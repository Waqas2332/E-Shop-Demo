export type productInitialState = {
  products: product[];
  isLoading: boolean;
  status: string;
  filters: {
    category: string;
    price: string;
    rate: number | null;
  };
};

export type product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
};
