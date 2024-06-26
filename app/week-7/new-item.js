"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="bg-black min-h-80 flex justify-center items-start pt-10">
      <div className="bg-gray-800 p-6 rounded shadow-lg w-3/4 max-w-lg mx-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Item Name
            </label>
            <input
              id="name"
              placeholder="Item Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-2 bg-gray-700 text-white w-full"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-white"
              >
                Quantity
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
                className="mt-1 block w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-white"
              >
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md"
              >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="cannedGoods">Canned Goods</option>
                <option value="dryGoods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
}
