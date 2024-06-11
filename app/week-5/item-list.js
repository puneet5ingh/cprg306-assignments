"use client";

import { useState, useEffect } from 'react';
import Item from './item';

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    import('./items.json').then((data) => {
      setItems(data.default);
    });
  }, []);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedGroupedItems = Object.keys(groupedItems)
    .sort()
    .reduce((acc, category) => {
      acc[category] = groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
      return acc;
    }, {});

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-4 py-2 rounded ${sortBy === 'group' ? 'bg-purple-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          Group by Category
        </button>
      </div>
      {sortBy === 'group' ? (
        Object.keys(sortedGroupedItems).map((category) => (
          <div key={category}>
            <h2 className="text-xl font-bold mt-4">{category}</h2>
            <ul>
              {sortedGroupedItems[category].map((item) => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      )}
    </div>
  );
}
