"use client"; 

import { useState } from 'react';
import Item from './item';

const itemsData = [
  {
    "id": "1h2GJKH12gkHG31h1H",
    "name": "milk, 4 L 🥛",
    "quantity": 1,
    "category": "dairy"
  },
  {
    "id": "2KJH3k2j3H1k2J3K1H",
    "name": "bread 🍞",
    "quantity": 2,
    "category": "bakery"
  },
  {
    "id": "3h2KJH3k2j3H1k2J3",
    "name": "eggs, dozen 🥚",
    "quantity": 2,
    "category": "dairy"
  },
  {
    "id": "4k2J3K1H2GJKH12gk",
    "name": "bananas 🍌",
    "quantity": 6,
    "category": "produce"
  },
  {
    "id": "5H1h1H2KJH3k2j3H",
    "name": "broccoli 🥦",
    "quantity": 3,
    "category": "produce"
  },
  {
    "id": "6H1k2J3K1H2GJKH1",
    "name": "chicken breasts, 1 kg 🍗",
    "quantity": 1,
    "category": "meat"
  },
  {
    "id": "7gkHG31h1H2KJH3k",
    "name": "pasta sauce 🍝",
    "quantity": 3,
    "category": "canned goods"
  },
  {
    "id": "8j3H1k2J3K1H2GJK",
    "name": "spaghetti, 454 g 🍝",
    "quantity": 2,
    "category": "dry goods"
  },
  {
    "id": "9H12gkHG31h1H2KJ",
    "name": "toilet paper, 12 pack 🧻",
    "quantity": 1,
    "category": "household"
  },
  {
    "id": "10H3k2j3H1k2J3K1",
    "name": "paper towels, 6 pack",
    "quantity": 1,
    "category": "household"
  },
  {
    "id": "11k2J3K1H2GJKH12",
    "name": "dish soap 🍽️",
    "quantity": 1,
    "category": "household"
  },
  {
    "id": "12GJKH12gkHG31h1",
    "name": "hand soap 🧼",
    "quantity": 4,
    "category": "household"
  }
];

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [items, setItems] = useState(itemsData);

  const sortedItems = () => {
    if (sortBy === 'group') {
      const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});

      Object.keys(groupedItems).forEach(category => {
        groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
      });

      return groupedItems;
    } else {
      return [...items].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
        return 0;
      });
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
      <div className="mb-4 text-white">
        <span>Sort by: </span>
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 mx-1 text-white rounded ${
            sortBy === 'name' ? 'bg-gray-700' : 'bg-gray-500'
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 mx-1 text-white rounded ${
            sortBy === 'category' ? 'bg-gray-700' : 'bg-gray-500'
          }`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-4 py-2 mx-1 text-white rounded ${
            sortBy === 'group' ? 'bg-gray-700' : 'bg-gray-500'
          }`}
        >
          Grouped Category
        </button>
      </div>
      <div className="bg-gray-800 rounded-lg p-4 w-full max-w-2xl">
        <ul className="text-center">
          {sortBy === 'group'
            ? Object.keys(sortedItems()).map(category => (
                <li key={category} className="mb-4">
                  <h2 className="capitalize text-white">{category}</h2>
                  <ul className="ml-4">
                    {sortedItems()[category].map(item => (
                      <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                      />
                    ))}
                  </ul>
                </li>
              ))
            : sortedItems().map(item => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;
