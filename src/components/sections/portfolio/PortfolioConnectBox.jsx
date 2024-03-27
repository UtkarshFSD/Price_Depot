const PortfolioConnectBox = ({ boxData }) => {
  return (
    <div class=" p-10 max-w-[1440px] m-auto">
      <div class="relative p-1 mx-auto text-center rounded-lg">
        <div class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-tr from-blue-600 to-green-400 pointer-events-none"></div>

        <div class="relative z-10 rounded-lg p-8 bg-body text-center">
          <h2 class="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl w-3/5 m-auto">
            {boxData?.heading}
          </h2>
          {boxData?.logos && boxData?.logos?.length > 0 && (
            <ul class="flex justify-around items-center my-4">
              {boxData?.logos?.map((brand) => (
                <li class="mx-2" key={brand?.alternate}>
                  <img
                    src={brand?.logo}
                    alt={brand?.alternate}
                    class="object-cover"
                  />
                </li>
              ))}
            </ul>
          )}
          <div class="flex justify-center">
            <button class="mt-4 p-3 text-sm bg-blue-500 rounded-lg text-white font-medium">
              {boxData?.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioConnectBox;
