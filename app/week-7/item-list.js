import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  return (
    <div>
      <div className="flex pt-5">
        <button
          onClick={() => setSortBy("name")}
          className={`${
            sortBy === "name" ? "bg-gray-900" : "bg-gray-700"
          } m-2 p-2 text-white font-semibold rounded`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`${
            sortBy === "category" ? "bg-gray-900" : "bg-gray-700"
          } m-2 p-2 text-white font-semibold rounded`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`${
            sortBy === "group" ? "bg-gray-900" : "bg-gray-700"
          } m-2 p-2 text-white font-semibold rounded`}
        >
          Group by Category
        </button>
      </div>
      {sortBy === "group" ? (
        Object.keys(groupedItems).map((category) => (
          <div key={category}>
            <h2 className="capitalize text-white font-bold px-2">
              {category}
            </h2>
            <ul>
              {groupedItems[category].map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={() => onItemSelect(item)}
                  className="cursor-pointer"
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
              className="cursor-pointer"
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
