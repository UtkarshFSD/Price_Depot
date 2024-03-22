const aboutInfoData = [
  {
    title: "Who We Are???",
    content:
      "We are believers of change! A change driven by technology and innovation. We help businesses and individuals in adapting as well as adopting digital transformation. Our aim is to improve businesses with our progressive and innovative technology solutions.",
  },
  {
    title: "What We Do Best",
    content:
      "We start by listening to the issues, requirements, challenges and objectives. The process continues with an effort to understand the business, market sector and competitors to develop information which is combined with our technical knowledge, expertise and research in order to provide the best solution at the lowest cost.",
  },
];

const AboutInfo = () => {
  return (
    <section class="mx-auto my-0">
      <div class="max-w-screen-2xl w-full flex flex-col gap-24">
        {aboutInfoData?.map((aboutInfo) => (
          <div class="flex justify-between items-start">
            <h1 class="text-5xl text-heading-1 font-extrabold w-2/5">{aboutInfo?.title}</h1>
            <p class="text-lg md:text-2xl text-heading-3 font-medium w-3/5">{aboutInfo?.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutInfo;
