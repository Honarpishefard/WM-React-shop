import { removeFromCardService } from "api";
import { Button } from "components";
import Cookies from "js-cookie";

export const BasketProducts = ({
  title,
  price,
  size,
  quantity,
  image,
  onClick,
  productId,
}) => {
  const newPrice = price.replaceAll("$", "");
  const calc = quantity * newPrice;

  const userId = Cookies.get("_id");

  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
      <div onClick={onClick} className="flex gap-5 flex-grow">
        <img src={image} className="max-h-60" alt="" />
        <div className="p-5 flex flex-col gap-2 justify-center">
          <p className="font-semibold text-lg">{title}</p>
          <p>${calc}</p>
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
      <Button
        classes="mx-6 mb-6 self-end"
        onClick={() => removeFromCardService(userId, productId, size, quantity)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash3-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
        </svg>
      </Button>
    </div>
  );
};
