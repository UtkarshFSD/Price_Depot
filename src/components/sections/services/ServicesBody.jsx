import React from "react";
import { Button, Slider, Box, Typography } from "@mui/material";

const SkillSlider = ({ skill, proficiency }) => (
  <Box sx={{ width: 500 }}>
    <div className="flex justify-between items-center">
      <Typography className="dark:text-white text-xl font-semibold text-gray-600">
        {skill}
      </Typography>
      <Typography className="dark:text-white text-gray-600">{`${proficiency}%`}</Typography>
    </div>
    <Slider
      aria-label={`${skill} proficiency`}
      value={proficiency}
      color="secondary"
      className="!text-[#846cf7] !h-3"
    />
  </Box>
);

const skills = [
  { name: "SEO", proficiency: 80 },
  { name: "Designing", proficiency: 90 },
  { name: "Development", proficiency: 85 },
  { name: "Marketing", proficiency: 70 },
];

const ServicesBody = () => {
  return (
    <div className="flex gap-28">
      <figure className="bg-no-repeat bg-cover h-[500px] w-1/2 rounded-2xl z-10">
        <img
          src="https://samartheme2.vercel.app/images/about/pic1.jpg"
          alt="About Us"
          className="w-full h-full object-cover rounded-r-[90px]"
        />
      </figure>
      <div className="flex flex-col gap-8">
        <div>
          <Button
            variant="outlined"
            className="!bg-[#e0dbfc] !border-0 !capitalize !tracking-[1px] !text-[#8573f0]"
          >
            Our Skills
          </Button>
        </div>
        <p className="text-4xl font-bold dark:text-white">
          We Have Best Experience In All <br /> Our Business Services
        </p>
        <div>
          {skills.map((skill) => (
            <SkillSlider
              key={skill.name}
              skill={skill.name}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
        <div class="w-full h-80 sm:h-96 midmd:h-full relative">
          <span class="absolute w-full aspect-[9/5]  rounded-full bg-gradient-to-tr from-[#8573f0] to-[#8573f0] blur-2xl opacity-10  right-10 bottom-28"></span>
        </div>
      </div>
    </div>
  );
};

export default ServicesBody;
