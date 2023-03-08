import { Footer, Header } from "layout";
import { HeroSec } from "./HomeComponents";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSec />
      <div className="max-w-lg mx-auto my-6 px-10 flex flex-col">
        <p>home</p>
      </div>
      <Footer />
    </>
  );
};
