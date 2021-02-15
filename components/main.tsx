import React from "react";
import HeroSection from "./heroSection";
import Filter from "./filterSecion";
const Main = () => {
  return (
    <main className="flex flex-grow flex-col">
      <HeroSection />
      <Filter />
      {/* <!-- Container --> */}
    </main>
  );
};

export default Main;
