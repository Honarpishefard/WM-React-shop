import heroPic from "assets/images/heroSecPic.png";
import { Button } from "components";
import { Link } from "react-router-dom";

export const HeroSec = () => {
  return (
    <section className="bg-black">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 px-10">
          <h1 className="max-w-2xl mb-4 text-4xl text-center md:text-start font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Discover the new you
          </h1>
          <p className="max-w-2xl mb-6 text-center md:text-start font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            Fashion is part of the daily air and it changes all the time with
            all the events. You can even see the approaching of a revoluation in
            clothes...
          </p>
          <div className="flex items-center gap-8">
            <Link to="/products" className="h-fit">
              <Button classes="flex mr-0 mb-0 items-center">Shop Now
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </Button>
            </Link>
            <Link to="#"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-center border  rounded-full  focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
              Speak to Sales
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroPic} className="max-h-screen" alt="mockup" />
        </div>
      </div>
    </section>
  );
};
