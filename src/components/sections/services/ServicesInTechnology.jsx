import { Container } from "@mui/material";

const services = [
  {
    name: "Cloud Services",
    description: "Enable scalability on-demand with cloud computing",
    imageUrl:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/nova-poster.webp",
  },
  {
    name: "Software Development",
    description:
      "Craft bespoke software solutions tailored to your business needs",
    imageUrl:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ai-banking-banner.webp",
  },
  {
    name: "Digital Transformation",
    description: "Revolutionize your business with digital technology",
    imageUrl:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/vyrb-banner-new.webp",
  },
];

const Data = ({ name, description, imageUrl }) => (
  <div className="px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center dark:text-white">
      <div className="flex-1 md:mb-0">
        <h2 className="text-5xl font-bold mb-6">{name}</h2>
        <p className="mb-6">
          Enable scalability on-demand with cloud computing
        </p>
        <button className="font-semibold py-2 px-4 border rounded-xl items-center">
          Get the Full Rundown
        </button>
      </div>

      <div className="flex-1">
        <div className=" p-8">
          <p className="mb-4">
            Gone are the days of on-prem servers and as an extension, server
            rooms. We handhold our clients in moving their data to the cloud,
            optimize their cloud spend, and develop architectures that are
            robust to the core. With our cloud managed services, let us handle
            your cloud operations while you handle your business.
          </p>
          <div className="flex justify-between mb-8">
            <button className="dark:bg-[#171717] font-semibold  py-2 px-4 items-center bg-[#efefef]">
              Cloud Consulting
            </button>
            <button className="dark:bg-[#171717] font-semibold  py-2 px-4 bg-[#efefef]  items-center">
              Cloud Managed Services
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center ">
      <div className="flex gap-8 shadow-md rounded-sm dark:bg-[#1c1c1c] dark:text-white">
        <div>
          <img className="w-96" src={imageUrl} alt="imageUrl" />
        </div>
        <div className="flex gap-6 flex-col justify-evenly ">
          <div>
            <p>NOVA</p>
            <p className="w-80 text-sm">{description}</p>
          </div>
          <div className="flex gap-4 flex-col">
            <p>Results</p>
            <div className="flex justify-between items-center">
              <p className="text-xs">
                Smart Contract-Based <br />
                Certifications
              </p>
              <div className="w-[1px] h-11 bg-black" />
              <p className="text-xs">
                Completely Transparent
                <br /> and Open LMS
              </p>
            </div>
          </div>
          <div>
            <button className="p-2 border rounded-xl dark:border-white text-sm border-black">
              View Success Story
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServicesInTechnology = () => {
  return (
    <>
      <Container className="border-black border-2 dark:border-white rounded-2xl p-11 dark:text-white">
        <p className="text-3xl font-semibold text-center">
          Harness the 8+ years of full stack experience we have across{" "}
          <span className="text-transparent text-4xl text-center font-bold bg-clip-text bg-gradient-to-br from-[#4e70d9]  to-[#56dcab]">
            FinTech,<br/> eCommerce, Healthcare, Aviation,{" "}
          </span>
          and 20+ other industries to solve <br/> your complex business challenges
        </p>
        <div className="text-center mt-24">
        <button className="border p-3 border-black dark:border-white rounded-xl">Talk to our expert</button>

        </div>
      </Container>
      {services.map((service, index) => (
        <Data
          key={index}
          name={service.name}
          description={service.description}
          imageUrl={service.imageUrl}
        />
      ))}
    </>
  );
};

export default ServicesInTechnology;
