import React, { useEffect, useState } from "react";

const useAnimatedValue = (start, end, duration) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const animate = () => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setValue(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };
    animate();
  }, [start, end, duration]);

  return Math.floor(value);
};

const StateCard = () => {
  const createdProjects = useAnimatedValue(0, 12, 1000);
  const projects = useAnimatedValue(0, 200, 1000);
  const happyClients = useAnimatedValue(0, 120, 1000);
  const years = useAnimatedValue(0, 5, 1000);

  const stats = [
    { value: createdProjects, title: "Created Projects" },
    { value: projects, title: "Projects" },
    { value: happyClients, title: "Happy Clients" },
    { value: years, title: "Years" },
  ];

  return (
    <section className="w-full relative mt-12 md:mt-16">
      <div className="mx-auto lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 w-full rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6 lg:gap-12">
        {stats.map(({ value, title }, index) => (
          <div key={index} className="text-center transition-transform duration-300 hover:-translate-y-2">
            <h2 className="font-bold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {value}+
            </h2>
            <p className="mt-2 text-heading-3">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StateCard;
