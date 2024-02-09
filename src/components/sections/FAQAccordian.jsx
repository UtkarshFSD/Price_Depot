import React, { useState, useEffect } from "react";

const faqData = [
  {
    question:
      "Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor ?",
    answer: "Answer to question 1",
  },
  {
    question:
      "Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus ?",
    answer: "Answer to question 2",
  },
  {
    question:
      "Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor ?",
    answer: "Answer to question 3",
  },
  {
    question:
      "Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus ?",
    answer: "Answer to question 4",
  },
  {
    question:
      "Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor ?",
    answer: "Answer to question 5",
  },
  {
    question:
      "Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus ?",
    answer: "Answer to question 6",
  },
];

const FAQAccordionItem = ({ faq, onToggle, isOpen }) => {
  const real =
    typeof window !== "undefined" && localStorage.getItem("appTheme");

  var currentTheme;
  const [theme, setTheme] = useState(real);
  useEffect(() => {
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const targetElement = mutation.target;
          currentTheme = targetElement.classList.contains("dark")
            ? "dark"
            : "light";
          setTheme(currentTheme);
        }
      }
    };

    const observer = new MutationObserver(callback);
    const config = {
      attributes: true,
      childList: false,
      subtree: false,
      attributeFilter: ["class"],
    };
    const targetNode = document.documentElement;

    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, [currentTheme]);

  return (
    <div
      class={`border-b rounded-lg p-4 ${
        theme === "dark" ? "bg-black-700" : "bg-white"
      } `}
    >
      <div class="flex justify-between items-center">
        <h3
          class={`text-lg font-semibold ${
            theme === "dark" ? "text-white" : "text-gray-800"
          } `}
        >
          {faq.question}
        </h3>
        <button
          onClick={onToggle}
          class={`ml-2 p-4 rounded-full w-[70px] ${
            isOpen ? "bg-red-500 text-white" : "bg-gray-200"
          } !text-[24px] font-[600]`}
          aria-expanded={isOpen}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>
      <div
        class={`transition-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p
          class={`text-lg font-semibold ${
            theme === "dark" ? "text-white" : "text-gray-800"
          } `}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const real =
    typeof window !== "undefined" && localStorage.getItem("appTheme");
 
  var currentTheme;
  const [theme, setTheme] = useState(real);
  useEffect(() => {
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const targetElement = mutation.target;
          currentTheme = targetElement.classList.contains("dark")
            ? "dark"
            : "light";
          setTheme(currentTheme);
        }
      }
    };

    const observer = new MutationObserver(callback);
    const config = {
      attributes: true,
      childList: false,
      subtree: false,
      attributeFilter: ["class"],
    };
    const targetNode = document.documentElement;

    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, [currentTheme]);

  return (
    <div class="w-full px-4 py-10 mt-10 ">
      <div
        class={`w-3/4  mx-auto ${
          theme === "dark" ? "bg-black-700" : "bg-white"
        } rounded-md shadow-md pt-3 transition duration-300 ease-in-out`}
      >
        <h1
          class={`text-[36px] font-bold text-center mb-10 mt-6 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Frequently Asked Questions
        </h1>
        <div class="space-y-2">
          {faqData.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
