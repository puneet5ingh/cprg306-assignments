export default function Item({ name, quantity, category }) {
    return (
      <li className="flex justify-between items-center p-4 border-b border-gray-200">
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-gray-500">Category: {category}</p>
        </div>
        <p className="text-lg">{quantity}</p>
      </li>
    );
  }
  