import React, { useState } from "react";
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

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div class ="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 class="text-xl mb-4 font-bold text-gray-700">Contact Us</h2>

        <div class="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div class="mb-4 flex gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <input
            type="tel"
            name="contactNumber"
            placeholder="+91 Contact number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div class="mb-4">
          <textarea
            name="ideaDescription"
            rows="4"
            placeholder="Describe your idea to help us assign the relevant consultation expert."
            value={formData.ideaDescription}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div class="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file-upload"
          >
            Attach file (less than 10MB)
          </label>
          <input
            id="file-upload"
            name="file"
            type="file"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div class="mt-4">
          <label class="flex items-center">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span class="ml-2 text-gray-700 text-sm">
              Keep me updated of the upcoming technology trends
            </span>
          </label>
        </div>

        <div class="flex items-center justify-between mt-4">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
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
