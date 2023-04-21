export const Card = ({ title, newPrice, oldPrice, image, onClick, children }) => {
  return (
    <div className="w-full h-full mx-auto justify-between items-end flex flex-col max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full" onClick={onClick}>
        <img className="rounded-tl-3xl rounded-tr-3xl w-full" src={image} alt="product image" />
        <div className="px-5 pb-5 md:px-3 md:pb-3">
          <h5 className="text-xl font-semibold md:text-lg tracking-tight text-gray-900 dark:text-white py-6">{title}</h5>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="text-xl md:text-lg font-bold text-gray-900 dark:text-white">${newPrice}</span>
              <span className="text-base md:text-sm font-bold text-gray-500 line-through dark:text-white">${oldPrice}</span>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
