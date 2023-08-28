export type productInitialState = {
  products: product[];
  isLoading: boolean;
  status: string;
};

export type product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};
