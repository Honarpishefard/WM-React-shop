import { useContext, useEffect, useState } from "react";
import { fetchProductsService, mediaURL } from "api";
import { useLocation, useParams, useNavigate } from "react-router";
import { Card, CardSkeleton, ModalComponent } from "components";
import { Footer, Header } from "layout";
import { SideBar } from "./SideBar";
import { store } from "context";
import { Dropdown } from "flowbite-react";
import { handleAddToCard } from "utils/addToCard";
import Cookies from "js-cookie";

export const Products = () => {
  const { products, setProducts } = useContext(store);
  const { category } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);

  const cookieId = Cookies.get("_id");

  useEffect(() => {
    fetchProductsService(category || "").then((res) => {
      setProducts(res.data.data);
      setLoading(false);
    });
  }, [category]);

  const handleNav = (id, category, sec) => {
    if (["/products/men", "/products/women"].includes(pathname)) {
      navigate(`${pathname}/${sec}/${id}`);
    } else {
      navigate(`${pathname}/${category}/${sec}/${id}`);
    }
  };

  return (
    <>
      <Header />
      <div className="flex">
        {category === "men" ? (
          <SideBar sections={["jacket", "shoes", "Tshirt"]} />
        ) : (
          <SideBar sections={["coat", "dress"]} />
        )}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-center p-8">
          {products?.map((i) =>
            loading ? (
              <CardSkeleton key={i._id} />
            ) : (
              <Card
                onClick={() => handleNav(i._id, i.category[0], i.category[1])}
                key={i._id}
                title={i.title}
                newPrice={i.newPrice}
                oldPrice={i.oldPrice}
                image={mediaURL + i.image}
              >
                <ModalComponent
                  onClick={() => {
                    handleAddToCard(i._id, size, quantity, cookieId);
                  }}
                  submit="Add"
                  cancel="Cancel"
                  classes="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl"
                  svg={
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                  }
                >
                  <h3 className="mb-8 text-lg font-normal text-gray-700 dark:text-gray-400">
                    Select size and quantity before adding product to your card
                  </h3>
                  <div className="flex items-center pb-8 gap-10">
                    <Dropdown
                      label={size || "Select Size"}
                      placement="right"
                      inline={true}
                    >
                      <Dropdown.Item onClick={() => setSize("Small")}>
                        Small
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setSize("Meduim")}>
                        Medium
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setSize("Large")}>
                        Large
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setSize("Extra Large")}>
                        Extra Large
                      </Dropdown.Item>
                    </Dropdown>
                    <div className="flex gap-6 bg-slate-100 w-fit rounded-full items-center">
                      <button
                        className="rounded-0 rounded-tl-full rounded-bl-full w-8 bg-slate-200 py-2"
                        onClick={() => {
                          if (quantity > 1) setQuantity(quantity - 1);
                        }}
                      >
                        -
                      </button>
                      <p>{quantity}</p>
                      <button
                        className="rounded-0 rounded-tr-full rounded-br-full w-8 bg-slate-200 py-2"
                        onClick={() => {
                          if (quantity < 20) setQuantity(quantity + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </ModalComponent>
              </Card>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
