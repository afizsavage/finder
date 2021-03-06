const HeroSection = (params) => {
  return (
    <div className="md:h-100 h-auto bg-gray-100 grid w-full ">
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-2 md:px-8 lg:px-16 px-6 py-10 md:py-0 ">
        <div className="my-auto h-80 md:h-auto md:col-span-3 lg:col-span-1">
          <h1 className="font-Oswald mx-auto text-center md:text-left text-2xl md:text-3xl lg:text-5xl md:leading-tight lg:leading-tight text-gray-800 font-extrabold">
            Your ideal buying and renting solution
          </h1>
          <p className="py-4"></p>
          <div className="flex justify-center  md:justify-start w-full">
            <a href="#" className="primeBtn">
              List Rental
            </a>
          </div>
        </div>
        <div className="bg-center h-96 md:h-auto md:col-span-4 lg:col-span-1 order-first md:order-2 bg-hero-image bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default HeroSection;
