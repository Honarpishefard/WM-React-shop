export const BasketProducts = ({ title, price, size, quantity, image }) => {
  return (
    <div className="flex bg-white border border-gray-200 rounded-3xl overflow-hidden gap-5 shadow dark:bg-gray-800 dark:border-gray-700">
      <img src={image} className="max-h-60" alt="" />
      <div className="p-5 flex flex-col gap-2 justify-center">
        <p>{title}</p>
        <p>{price}</p>
        <p>selected size:  {size}</p>
        <p>quantity:  {quantity}</p>
      </div>
    </div>
  );
};
