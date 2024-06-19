"use client"; // Add this line at the top

import ItemList from './item-list';

const Page = () => {
  return (
    <main className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-white text-2xl mb-4">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
