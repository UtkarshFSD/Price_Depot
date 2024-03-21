import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    ideaDescription: "",
    file: null,
    subscribe: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Invalid email format.";
    if (
      !formData.contactNumber.match(
        /^\+?\d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
      )
    )
      newErrors.contactNumber = "Invalid phone number.";
    if (!formData.ideaDescription.trim())
      newErrors.ideaDescription = "Idea description is required.";
    if (!formData.file) newErrors.file = "Please attach a file.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    } else {
      console.error("Validation errors:", errors);
    }
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

  console.log("theme", typeof theme);

  return (
    <div
      class={`w-full px-4 py-10 mt-24 ${
        theme === "dark" ? "bg-black-900" : "bg-white"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        class={`max-w-2xl mx-auto ${
          theme === "dark" ? "bg-gray-500" : "bg-white"
        } rounded-md shadow-lg p-5 `}
      >
        <h2
          class={`text-[24px] mb-4 font-[700] ${
            theme === "dark" ? "text-white" : "text-gray-700"
          } `}
        >
          Contact Us
        </h2>

        <div class="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && (
            <p class="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>

        <div class="mb-4 flex gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && (
            <p class="text-red-500 text-xs italic">{errors.email}</p>
          )}
          <input
            type="numeric"
            name="contactNumber"
            placeholder="+91 Contact number"
            value={formData.contactNumber}
            onChange={handleChange}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.contactNumber && (
            <p class="text-red-500 text-xs italic">{errors.contactNumber}</p>
          )}
        </div>

        <div class="mb-4">
          <textarea
            name="ideaDescription"
            rows="4"
            placeholder="Describe your idea to help us assign the relevant consultation expert."
            value={formData.ideaDescription}
            onChange={handleChange}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
          {errors.ideaDescription && (
            <p class="text-red-500 text-xs italic">{errors.ideaDescription}</p>
          )}
        </div>

        <div class="mb-4">
          <label
            class={`block ${
              theme === "dark" ? "text-white" : "text-gray-700"
            } text-sm font-bold mb-2`}
            htmlFor="file-upload"
          >
            Attach file (less than 10MB)
          </label>
          <input
            id="file-upload"
            name="file"
            type="file"
            onChange={handleChange}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.file && (
            <p class="text-red-500 text-xs italic">{errors.file}</p>
          )}
        </div>

        <div class="mt-4">
          <label class="flex items-center">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              class="form-checkbox h-5 w-5 text-gray-600"
            />
            <span
              class={`ml-2 ${
                theme === "dark" ? "text-white" : "text-gray-700"
              } text-sm`}
            >
              Keep me updated of the upcoming technology trends
            </span>
            {errors.name && (
              <p class="text-red-500 text-xs italic">{errors.name}</p>
            )}
          </label>
        </div>

        <div class="flex items-center justify-between mt-4">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!formData.subscribe}
          >
            Submit
          </button>
        </div>

        <p class="text-xs mt-4 text-gray-500">
          Your idea is 100% protected by our non-disclosure agreement.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
