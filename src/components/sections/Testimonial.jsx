import { useState } from "react";
import TestimonialCard from "../cards/TestimonialCard";

const testimonials = [
  {
    description:
      "We chose AgileGeeks to build our financial literacy and money management app from start to finish. From the first call, we were very impressed with Appinventiv’s professionalism, expertise, and commitment to delivering top-notch results. Our app is now live and the feedback that we are receiving from users is fantastic.",
    name: "Cak Dikin",
    role: "Co-Founder & CEO ",
    company: "American",
    companyIcon:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/americana-logo-color.svg",
    image:
      "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    description:
      "We approached AgileGeeks with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The AgileGeeks team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    name: "Billy Lan",
    role: "Director - Digital Engineering",
    company: "Caley Peace",
    companyIcon: "https://samartheme2.vercel.app/images/logo/logo-pink4.png",
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    description:
      "We were looking for an agency that would understand the direness of the hourly worker job search cycle situation when we came across AgileGeeks. What we liked about the team is how they did not just understand what we were looking for but also gave us ideas on how we could make the process more efficient and simplified for the jobseekers through their empathy mapping skillset.",
    name: "Neeraj Tiwari",
    role: "CTO and Co-founder,",
    company: "Fox Dexon",
    companyIcon: "https://samartheme2.vercel.app/images/logo/logo-pink3.png",
    image:
      "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center w-full">
      <button
        onClick={goToPrev}
        className="w-12 h-12 flex justify-center items-center p-4 bg-gray-200 hover:bg-gray-300 rounded-full mr-4 "
      >
        &lt;
      </button>

      <div className="w-full overflow-hidden mx-4">
        <TestimonialCard
          description={testimonials[activeIndex].description}
          name={testimonials[activeIndex].name}
          role={testimonials[activeIndex].role}
          company={testimonials[activeIndex].company}
          companyIcon={testimonials[activeIndex].companyIcon}
          image={testimonials[activeIndex].image}
        />
      </div>

      <button
        onClick={goToNext}
        className="w-12 h-12 flex justify-center items-center p-4 bg-gray-200 hover:bg-gray-300 rounded-full ml-4"
      >
        &gt;
      </button>
    </div>
  );
};
export default Testimonial;


