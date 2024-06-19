import ItemList from './item-list';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
        <ItemList />
      </div>
    </div>
  );
}
