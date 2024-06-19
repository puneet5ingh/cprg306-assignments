import NewItem from './new-item';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Week 4 Assignment</h1>
        <NewItem />
      </div>
    </div>
  );
}
