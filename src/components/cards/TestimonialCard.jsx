

const TestimonialCard = ({ description, name, role, company, companyIcon, image }) => {
  return (
    <div className="group p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
      <p className="pb-8 border-b mb-8 text-heading-3">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img
              src={image}
              alt={name}
              className=" w-40 h-40 rounded-3xl object-cover lg:max-h-none max-h-96"
            />
          </div>

          <div className=" relative">
            <h2 className="text-lg md:text-xl font-semibold text-heading-2">
              {name}
            </h2>
            <p className="mt-2 text-heading-3">
              {role} <br /> {company}
            </p>
          </div>
        </div>

        <div>
          <img
            src={companyIcon}
            alt={`${company}-icon`}
            className="object-cover lg:max-h-none max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
