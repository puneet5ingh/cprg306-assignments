// app/week-5/item.js

export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 border-b border-gray-200">
      <span className="block text-lg font-semibold">{name}</span>
      <span className="block text-sm text-gray-600">Buy {quantity} in {category}</span>
    </li>
  );
}
