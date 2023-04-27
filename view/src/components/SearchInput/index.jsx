import { mediaURL } from "api";
import { Card, ModalComponent } from "components";
import { store } from "context";
import { Dropdown } from "flowbite-react";
import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { handleAddToCard, handleSearch } from "utils";

export const SearchInput = ({ classes }) => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(store);
  const [visibility, setVisibility] = useState(false);
  const [searchCategory, setSearchCategory] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);

  const cookieId = Cookies.get("_id");

  return (
    <form onSubmit={(e) => e.preventDefault()} className={`flex-col ${classes}`}>
      <div className="flex w-full relative">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <button onClick={() => setVisibility(!visibility)} type="button" id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
          All categories
          <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
        <div id="dropdown" className="z-10 hidden md:flex absolute top-full mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
          { visibility ? 
            <ul onClick={(e) => console.log(e.target.innerHTML)} className="py-2 text-sm w-full text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
              <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Jackets
                </button>
              </li>
              <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Shoes
                </button>
              </li>
              <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  T-shirts
                </button>
              </li>
              <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Coats
                </button>
              </li>
              <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Dresses
                </button>
              </li>
            </ul> : null }
        </div>
        <div className="relative w-full">
          <input onChange={(e) => {
            setSearchInputValue(e.target.value);
            setTimeout(() => { handleSearch(e.target.value, searchCategory).then((res) => setSearchResults(res))}, 3000);
          }} type="search" id="search-dropdown" placeholder="Look for a product..." required
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"/>
          <button type="submit" onClick={() => handleSearch(searchInputValue, searchCategory).then((res) => setSearchResults(res))}
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl rounded-r-lg h-full focus:ring-4 focus:outline-none focus:ring-blue-300">
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
      { !searchResults && searchInputValue ? ( <div className="flex justify-center items-start bg-gray-50 py-5 px-6 mt-1 rounded-md">
        <p className="text-gray-400 font-normal text-base py-10">No results...</p>
      </div> ) : null }
      { searchResults ? <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center items-start bg-gray-50 py-5 px-6 mt-1 rounded-md">
        {searchResults?.map((i) => ( <Card onClick={() => navigate(`/products/${i.category[0]}/${i.category[1]}/${i._id}`)} 
          key={i._id} title={i.title} newPrice={i.newPrice}oldPrice={i.oldPrice} image={mediaURL + i.image}>
            <ModalComponent
              onClick={() => { handleAddToCard(i._id, size, quantity, cookieId) }} submit="Add" cancel="Cancel" 
              classes="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl"
              svg={
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg> }>
              <h3 className="mb-8 text-lg font-normal text-gray-700 dark:text-gray-400">
                Select size and quantity before adding product to your card
              </h3>
              <div className="flex items-center pb-8 gap-10">
                <Dropdown label={size || "Select Size"} placement="right" inline={true}>
                  <Dropdown.Item onClick={() => setSize("Small")}>Small</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSize("Meduim")}>Medium</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSize("Large")}>Large</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSize("Extra Large")}>Extra Large</Dropdown.Item>
                </Dropdown>
                <div className="flex gap-6 bg-slate-100 w-fit rounded-full items-center">
                  <button className="rounded-0 rounded-tl-full rounded-bl-full w-8 bg-slate-200 py-2"
                    onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}>-</button>
                  <p>{quantity}</p>
                  <button className="rounded-0 rounded-tr-full rounded-br-full w-8 bg-slate-200 py-2"
                    onClick={() => { if (quantity < 20) setQuantity(quantity + 1) }}>+</button>
                </div>
              </div>
            </ModalComponent>
          </Card> ))}
      </div> : null }
    </form>
  );
};
