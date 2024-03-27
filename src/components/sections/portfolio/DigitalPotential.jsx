const data = [
  {
    title: "KFC",
    performance: "50%",
    rating: 4.5,
    performanceAt: "Higher Orders",
    ratingIn: "Play/App Store Rating",
  },
  {
    title: "IKEA",
    performance: "75%",
    rating: 4.2,
    performanceAt: "Higher Conversion Rate",
    ratingIn: "Mobile App Downloads",
  },
  {
    title: "HUKOMI",
    performance: "65%",
    rating: 4.0,
    performanceAt: "Raised in Funding",
    ratingIn: "Mobile App Downloads",
  },
  {
    title: "JOB GET",
    performance: "80%",
    rating: 4.8,
    performanceAt: "Million Active Users",
    ratingIn: "Website Traffic",
  },
  {
    title: "Subway",
    performance: "70%",
    rating: 4.3,
    performanceAt: "IKEA Stores Deployed the Solution",
    ratingIn: "Solution Touted as the Biggest Source of RoI Measurement",
  },
  {
    title: "6ThStreet",
    performance: "55%",
    rating: 4.1,
    performanceAt: "iOS App Downloads",
    ratingIn: "Android App Downloads",
  },
];

const Card = ({ title, performance, rating, performanceAt, ratingIn }) => (
  <div className="bg-[#141414] text-white p-5 shadow-lg rounded-lg flex flex-col justify-between h-64 hover:bg-gradient-to-tr from-blue-600 to-green-400">
    <h2 class="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl">
      {title}
    </h2>
    <div className="flex justify-start items-center gap-8">
      <div className="flex flex-col gap-3">
        <p className="text-[#fa7e6a] text-3xl font-bold">{performance}</p>
        <p className="text-xs">{performanceAt}</p>
      </div>
      <div className="w-[1px] h-20 bg-slate-400"></div>
      <div className="flex flex-col gap-3">
        <p className="text-[#fa7e6a] text-3xl font-bold">{rating}</p>
        <p className="text-xs">{ratingIn}</p>
      </div>
    </div>
  </div>
);
const DescriptiveCard = ({ title, imageUrl, additionalClass, logourl }) => (
  <div
    className={`bg-[#141414] text-white p-5 shadow-lg rounded-lg flex flex-col h-auto gap-10 ${additionalClass} hover:bg-zinc-800`}
  >
    <div>{logourl && <img src={logourl} alt={title} />}</div>
    <p className="w-2/3 text-sm font-medium">{title}</p>
    <div>
      {logourl && <img className="rounded-2xl" src={imageUrl} alt={title} />}
    </div>
  </div>
);

const DigitalPotential = () => (
  <div className="p-10 max-w-[1440px] m-auto">
    <p className="text-5xl font-bold dark:text-white mb-10">
      Unleashing the Digital Potential <br /> of Global Leaders
    </p>
    <div className="grid grid-cols-3 gap-4">
      {data.map((res) => (
        <Card
          key={res.title}
          title={res.title}
          performance={res.performance}
          rating={res.rating}
          performanceAt={res.performanceAt}
          ratingIn={res.ratingIn}
        />
      ))}
    </div>
    <div className="grid grid-cols-2 gap-10 mt-20">
      {data.map((res, index) => (
        <DescriptiveCard
          key={res.title}
          title="A fully customizable patient messaging system that allows  patients to connect with the hospital staff through voice  commands and head gestures."
          imageUrl="https://appinventiv.com/wp-content/uploads/2023/09/edfundo-banner.png"
          logourl="https://appinventiv.com/wp-content/uploads/2023/09/pizza-hut-logo.svg"
          additionalClass={index % 2 === 0 ? "mt-14" : ""}
        />
      ))}
    </div>
  </div>
);

export default DigitalPotential;
