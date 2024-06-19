"use client";

import { useState, useEffect } from 'react';
import Item from './item';

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    fetch('/week-5/items.json')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const groupedItems = items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const sortedItems = sortBy === 'group'
    ? Object.entries(groupedItems).flatMap(([category, items]) => {
        return items.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => ({
          ...item,
          groupHeader: index === 0 ? category : null
        }));
      })
    : [...items].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
        return 0;
      });

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 mr-2 rounded-md ${
            sortBy === 'name' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 mr-2 rounded-md ${
            sortBy === 'category' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-4 py-2 rounded-md ${
            sortBy === 'group' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          Group by Category
        </button>
      </div>
      <ul className="divide-y divide-gray-200">
        {sortedItems.map((item) => (
          <>
            {item.groupHeader && <li className="text-lg font-bold pt-4 pb-2">{item.groupHeader}</li>}
            <Item key={item.id} {...item} />
          </>
        ))}
      </ul>
    </div>
  );
}
