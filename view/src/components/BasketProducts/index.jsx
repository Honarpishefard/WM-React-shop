export const BasketProducts = ({
  title,
  price,
  size,
  quantity,
  image,
  onClick,
  children,
}) => {
  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
      <div onClick={onClick} className="flex gap-5 flex-grow">
        <img src={image} className="max-h-60" alt="" />
        <div className="p-5 flex flex-col gap-2 justify-center">
          <p className="font-semibold text-lg">{title}</p>
          <p>$ {price*quantity}</p>
          <p className="font-semibold">
            <span className="text-gray-500 font-light">selected size:</span>{" "}
            {size}
          </p>
          <p className="font-semibold">
            <span className="text-gray-500 font-light">quantity: </span>
            {quantity}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};
