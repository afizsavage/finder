const HeroSection = (params) => {
  return (
    <div className="md:h-100 h-auto bg-gray-100 grid w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-16 px-6 ">
        <div className="my-auto">
          <div className="font-Oswald mx-auto text-center md:text-left text-2xl md:text-5xl text-gray-800 font-extrabold">
            The ideal renting and buying solution
          </div>
        </div>
        <div className="bg-center h-96 md:h-auto order-first md:order-2 bg-hero-image bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default HeroSection;
