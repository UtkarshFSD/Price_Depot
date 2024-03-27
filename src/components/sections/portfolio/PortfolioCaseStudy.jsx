const PortfolioCaseStudy = ({ caseData = [] }) => {
  return (
    <section className="max-w-[1440px] m-auto flex flex-col justify-center items-center gap-8">
      { caseData?.length > 0 && (
        caseData?.map((caseItem, index) => (
          <div key={caseItem.name} className="">
            <div
              className={`flex items-center justify-between gap-16 p-10 ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-1/2">
                <img
                  className="w-full"
                  src={caseItem.bannerImageUrl}
                  alt="banner"
                />
              </div>
              <div className="text-heading-1 rounded-lg flex flex-col justify-start items-start gap-6 w-[45%]">
                <h2 className="text-heading-1 font-extrabold text-2xl sm:text-3xl md:text-4xl">
                  {caseItem?.name}
                </h2>
                <p className="text-base md:text-lg text-heading-3 font-medium w-3/5">
                  {caseItem.description}
                </p>
                <div className="flex">
                  {caseItem?.caseDataNumber?.map((data, dataIndex) => (
                    <div
                      key={data.description}
                      className={`mr-8 ${
                        dataIndex !== caseItem.caseDataNumber.length - 1
                          ? "border-r border-gray-300"
                          : ""
                      } pr-8`}
                    >
                      <strong className="text-heading-3 text-2xl">
                        {data.number}
                      </strong>
                      <p className="text-heading-3 text-xs">
                        {data.description}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="mt-4 p-3 text-sm bg-blue-500 rounded-lg text-white font-medium">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        ))
      ) 
      }
    </section>
  );
};

export default PortfolioCaseStudy;
