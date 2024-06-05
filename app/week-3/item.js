const Item = ({ name, quantity, category }) => {
    return (
      <li className="p-2 border-b border-black-200 flex flex-col">
        <span className="text-lg"> name: {name}</span>
        <span className="text-gray-500">quantity:{quantity} 
        <li>category:{category}</li></span>
      </li>
    );
  };

  export default Item;