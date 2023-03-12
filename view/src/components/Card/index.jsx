import { Button } from "components";

export const Card = ({ title, newPrice, oldPrice, image }) => {
  return (
    <div className="w-full h-full mx-auto justify-between flex flex-col max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-tl-3xl rounded-tr-3xl w-full"
        src={image}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white py-6">
          {title}
        </h5>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {newPrice}
            </span>
            <span className="text-base font-bold text-gray-500 line-through dark:text-white">
              {oldPrice}
            </span>
          </div>
          <Button classes="min-w-fit">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
