import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateFilter } from "../redux/slices";

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  //   Used Set to get only unique values
  const categorySet = new Set<string>();
  products.forEach((product) => {
    categorySet.add(product.category);
  });
  const categories = Array.from(categorySet);
  console.log(categories);
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRating(event.target.value);
  };

  const handleApplyFilters = () => {
    const filters = {
      category: selectedCategory,
      price: selectedPriceRange,
      rate: Number(selectedRating) === 0 ? null : Number(selectedRating),
    };
    dispatch(updateFilter(filters));
  };

  return (
    <div className="bg-white p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filter Products</h2>
      <div className="mb-4">
        <label htmlFor="category" className="block font-medium">
          Category
        </label>
        <select
          id="category"
          className="w-full p-2 border rounded"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="priceRange" className="block font-medium">
          Price Range
        </label>
        <select
          id="priceRange"
          className="w-full p-2 border rounded"
          value={selectedPriceRange}
          onChange={handlePriceRangeChange}
        >
          <option value="">Any Price</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value=" > 200">Above $200</option>
        </select>
      </div>
      <div>
        <label htmlFor="rating" className="block font-medium">
          Rating
        </label>
        <select
          id="rating"
          className="w-full p-2 border rounded"
          value={selectedRating}
          onChange={handleRatingChange}
        >
          <option value="">Any Rating</option>
          <option value="4">4 Stars & Above</option>
          <option value="3">3 Stars & Above</option>
          <option value="2">2 Stars & Above</option>
          <option value="1">1 Star & Above</option>
        </select>
      </div>
      <button
        onClick={handleApplyFilters}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
