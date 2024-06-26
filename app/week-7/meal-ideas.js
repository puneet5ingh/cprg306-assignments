"use client";
import React, { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  if (!response.ok) {
    throw new Error("Network Response not OK");
  }
  const data = await response.json();
  if (!data.meals) {
    return [];
  }
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        try {
          const data = await fetchMealIdeas(ingredient);
          setMeals(data);
        } catch (error) {
          console.error("Error fetching meal ideas:", error);
          setMeals([]);
        }
      } else {
        setMeals([]);
      }
    };

    loadMealIdeas();
  }, [ingredient]);

  return (
    <main>
      <h1 className="text-3xl text-center font-bold mt-4 text-white">Meal Ideas</h1>
      <ul>
        {meals.length > 0 ? (
          meals.map((meal, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 m-4 rounded hover:bg-gray-600"
            >
              <h2 className="text-xl font-bold text-white">{meal.strMeal}</h2>
            </li>
          ))
        ) : (
          <li className="bg-gray-800 p-4 m-4 rounded hover:bg-gray-600">
            <h2 className="text-xl font-bold text-white">
              No meal ideas found for {ingredient}
            </h2>
          </li>
        )}
      </ul>
    </main>
  );
};

export default MealIdeas;
