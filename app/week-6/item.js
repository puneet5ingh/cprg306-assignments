const Item = ({ name, quantity, category }) => {
  return (
    <li className="text-white bg-gray-700 rounded-lg p-2 my-2">
      {name} - Buy {quantity} in {category}
    </li>
  );
};

export default Item;
