import { discountCodes } from "assets/discountCodes";
import { Button, TextField } from "components";
import { useState } from "react";
import { toast } from "react-toastify";

export const SideBar = ({ totalPrice }) => {
  const [discount, setDiscount] = useState(false);
  const [code, setCode] = useState(false);

//   discountCodes.map((i) => console.log(i.code));

  const checkDiscountCode = () => {
    if (!code) return toast.error("Enter a discount code before submitting");
    if (discountCodes.includes(code)) {
      setDiscount(true);
      return console.log("ok");
    }
    toast.error("This code is not valid");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-cente py-10 px-12 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
        <p className="text-xl font-bold pb-6 w-fit">Receipt</p>
        <div className="w-full flex flex-col gap-2">
          <p className="flex w-full justify-between text-gray-500 font-normal">
            Total:{" "}
            <span className="text-black font-semibold">$ {totalPrice}</span>
          </p>
          <p className="flex w-full justify-between text-gray-500 font-normal">
            Shipping cost:{" "}
            <span className="text-black font-semibold">Free!</span>
          </p>
          <p className="flex w-full justify-between text-gray-500 font-normal">
            Discount:{" "}
            <span className="text-black font-semibold">
              {discount ? "20%" : "-"}
            </span>
          </p>
          <p className="flex w-full justify-between text-gray-500 font-normal">
            Total cost:{" "}
            <span className="text-black font-semibold">$ {totalPrice}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-cente py-10 px-12 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
        <p className="text-xl font-bold pb-6 w-fit">Have a discount code?</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            checkDiscountCode();
          }}
        >
          <TextField
            onChange={(event) => setCode(event.target.value)}
            label="Enter code here:"
            htmlFor="discountCode"
            id="discountCode"
          />
          <Button classes="justify-center">Submit code</Button>
        </form>
      </div>
    </div>
  );
};
