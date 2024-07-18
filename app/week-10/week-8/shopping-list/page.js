"use client";
import React, { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./new-item.js";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

const ShoppingList = () => {
  const { data: user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        if (user && user.uid) {
          console.log("Fetching items for user:", user.uid);
          const fetchedItems = await getItems(user.uid);
          console.log("Fetched Items: ", fetchedItems);
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error("Failed to load items:", error);
      }
    };

    loadItems();
  }, [user]);

  const handleAddItem = async (item) => {
    try {
      const newItemId = await addItem(user.uid, item);
      console.log("Added new item with ID: ", newItemId);

      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-extrabold">Shopping List</h1>
      <div className="flex">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;







