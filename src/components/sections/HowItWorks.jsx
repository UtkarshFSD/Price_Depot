const Step = ({ icon, title, description }) => (
  <div className="flex flex-col gap-4 justify-center items-center text-center">
    <div className="border rounded-full p-5  shadow-lg bg-gradient-to-r from-blue-600 to-green-400 w-fit">
      <img src={icon} alt={title} className="w-32 h-32 rounded-full" />
    </div>
    <h3 className="text-2xl text-heading-2-reverse font-semibold mt-2">{title}</h3>
    <p className="text-heading-3-reverse text-lg">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "Designing",
      description:
        "Suspendisse potenti. Pellentesque ornare mattis elit non fermentum.",
    },
    {
      icon: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      title: "Development",
      description:
        "Suspendisse potenti. Pellentesque ornare mattis elit non fermentum.",
    },
    {
      icon: "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "Launching",
      description:
        "Suspendisse potenti. Pellentesque ornare mattis elit non fermentum.",
    },
  ];

  return (
    <section className={`py-20 opacity-90 bg-body-reverse`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <button className="mb-4 text-lg font-semibold text-heading-1-reverse p-3 rounded-xl bg-gradient-to-tr from-blue-600 to-green-400">
            OUR STEPS
          </button>
          <h1 class="text-heading-1-reverse font-semibold text-2xl sm:text-3xl md:text-4xl">
            How It’s Work
          </h1>
        </div>
        <div className="flex justify-around">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
