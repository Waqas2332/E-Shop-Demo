export type productInitialState = {
  products: product[];
  isLoading: boolean;
  status: string;
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
