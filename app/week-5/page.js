"use client";

import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-200 p-8 flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
