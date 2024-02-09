import React, { useEffect, useState } from "react";

const animateValue = (start, end, duration, onProgress) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    onProgress(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const StateCard = () => {
  const [createdProjects, setCreatedProjects] = useState(0);
  const [projects, setProjects] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    animateValue(0, 12, 1000, setCreatedProjects);
    animateValue(0, 200, 1000, setProjects);
    animateValue(0, 120, 1000, setHappyClients);
    animateValue(0, 5, 1000, setYears);
  }, []);

  return (
    <section className="w-full relative mt-12 md:mt-16">
      <div className="mx-auto lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 w-full rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6 lg:gap-12">
        <div className="text-center">
          <h2 className="font-bold text-xl sm:text-2xl md:text-4xl text-heading-1 color">
            {Math.floor(createdProjects)}+
          </h2>
          <p className="mt-2 text-heading-3">Created projects</p>
        </div>

        <div className="text-center">
          <h2 className="font-bold text-xl sm:text-2xl md:text-4xl text-heading-1">
            {Math.floor(projects)}+
          </h2>
          <p className="mt-2 text-heading-3">Projects</p>
        </div>

        <div className="text-center">
          <h2 className="font-bold text-xl sm:text-2xl md:text-4xl text-heading-1">
            {Math.floor(happyClients)}
          </h2>
          <p className="mt-2 text-heading-3">Happy Client</p>
        </div>

        <div className="text-center">
          <h2 className="font-bold text-xl sm:text-2xl md:text-4xl text-heading-1">
            {Math.floor(years)}+
          </h2>
          <p className="mt-2 text-heading-3">Years</p>
        </div>
      </div>
    </section>
  );
};

export default StateCard;
