const data = [
  {
    title: "KFC",
    performance: "50%",
    rating: 4.5,
  },
  {
    title: "IKEA",
    performance: "75%",
    rating: 4.2,
  },
  {
    title: "HUKOMI",
    performance: "65%",
    rating: 4.0,
  },
  {
    title: "JOB GET",
    performance: "80%",
    rating: 4.8,
  },
  {
    title: "Subway",
    performance: "70%",
    rating: 4.3,
  },
  {
    title: "6th Street",
    performance: "55%",
    rating: 4.1,
  },
];

const Card = ({ title, performance, rating, imageUrl }) => (
  <div className="bg-[#141414] text-white p-5 shadow-lg rounded-lg flex flex-col justify-between h-64 hover:bg-zinc-800">
    <div>{imageUrl && <img src={imageUrl} alt={title} />}</div>
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-3">
        <p className="text-[#fa7e6a] text-3xl font-bold">{performance}</p>
        <p className="text-xs">Order</p>
      </div>
      <div className="w-[1px] h-20 bg-slate-400"></div>
      <div className="flex flex-col gap-3">
        <p className="text-[#fa7e6a] text-3xl font-bold">{rating}</p>
        <p className="text-xs">Rating</p>
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
  <div className="mx-10">
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
          imageUrl="https://appinventiv.com/wp-content/uploads/2023/09/pizza-hut-logo.svg"
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
