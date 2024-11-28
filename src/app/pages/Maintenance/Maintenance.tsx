/** @format */

const MainTenance = () => {
  return (
    <>
      <div className="h-screen mainTenance-background relative">
        <div className="h-full">
          <div className="w-[200px] mx-auto">
            <a href="/">
              <img
                className="py-12 my-auto"
                src="/img/Marchcroft-Logo.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="w-full relative">
            <div className="lg:mt-[230px] md:mt-[200px] sm:mt-[200px] mt-5 lg:w-[591px] md:w-[591px] sm:w-[320px] w-[320px] mx-auto">
              <p className="text-center text-white font-medium text-[50px]">
                The site is currently down for maintenance
              </p>
              <p className="text-center text-white text-base font-normal pt-4">
                We apologize for any inconveniences, we are working on it and
                will be back soon
              </p>
            </div>
            <div className="mainTenance-gradient__left absolute top-0 left-0"></div>
          </div>
          <div className="mainTenance-gradient__right absolute right-0 max-[700px]:hidden block"></div>
        </div>
        <footer className="mt-5 absolute bottom-0 w-full">
          <div className="border border-[#FFFFFF80]"></div>
          <div className="py-5 text-center lg:flex lg:justify-center lg:gap-3 md:flex md:justify-center md:gap-3 sm:block sm:gap-2 block gap-2">
            <p className="text-white text-sm font-normal">
              You can contact us:
            </p>
            <p className="text-white text-sm font-normal">
              Phone: +(44) - 7551 -73843
            </p>

            <p className="text-white text-sm font-normal">
              Email: contactus@marchcroft.com
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainTenance;
