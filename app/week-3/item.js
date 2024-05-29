const Item = ({ name, quantity, category }) => {
    return (
      <li className="p-2 border-b border-gray-200 flex flex-col">
        <span className="text-lg">{name}</span>
        <span className="text-gray-500">Buy {quantity} in {category}</span>
      </li>
    );
  };
  
  export default Item;