const AgilegeeksAroundTheWorld = () => {
    return (
      <div className="container mx-auto p-4 mt-10 mb-10">
        <p className="text-5xl text-center font-bold dark:text-white">
          Agilegeeks around the Globe
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 flex-col gap-4 shadow bg-white dark:bg-[#141414]"
            >
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/cont-loc-india.svg"
                alt="company logo"
                className="w-16 dark:bg-white dark:rounded-full"
              />
              <p className="font-bold dark:text-white">India (HQ)</p>
              <p className="text-xs dark:text-white">
                B-25, Sector 58, Noida <br />
                201301, UP, India
              </p>
              <p className="text-blue-600 text-sm">(t) + 91 - 844 - 818 - 2018</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default AgilegeeksAroundTheWorld;