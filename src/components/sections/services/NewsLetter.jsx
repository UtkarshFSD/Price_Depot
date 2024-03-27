import { Container, Card } from "@mui/material";
import { useState } from "react";

const Testimonial = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert(`Subscribing with email: ${email}`);
  };
  return (
    <div className="mr-28 ml-28 mt-12">
      <Card className="relative">
        <figure className=" absolute bg-no-repeat bg-cover w-full rounded-2xl z-10">
          <img
            src="https://samartheme2.vercel.app/_next/static/media/pattern3.13b54389f91d8b7f8280d082d161f972.png"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="h-[200px] flex justify-center items-center gap-16">
          <p className="text-4xl font-bold">
            Subscribe To Our Newsletter For <br /> Latest Update
          </p>
          <div className="flex z-50 items-center rounded-full shadow-md p-2 !bg-white max-w-md">
            <input
              type="text"
              placeholder="Your Email Address"
              className="border-none outline-none p-2.5 flex-grow rounded-full !bg-white"
              onChange={(e) => setEmail(e.target.value)} // Update the email state on change
              value={email}
            />
            <button
              type="submit"
              onClick={()=>{alert("Please Enter Your Email")}}
              className="border-none bg-gradient-to-r from-pink-300 via-red-300 to-yellow-200 rounded-full p-2.5 ml-2 cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M22 2L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Testimonial;
