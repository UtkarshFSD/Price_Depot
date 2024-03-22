import React from "react";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ServicesHeroSection = () => {
  return (
    <section class="relative ">
      <div class="h-screen">
        <div class="relative overflow-hidden h-full">
          <figure class="bg-no-repeat bg-cover h-[850px] w-full absolute top-0 left-0 right-0 z-10">
            <img
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/banner-service-bg.webp"
              alt="About Us"
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 class="text-white font-bold text-xl sm:text-4xl/tight md:text-4xl/tight xl:text-6xl/tight flex gap-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#977efa] from-20% via-[#c0b4fd] via-30% to-[#977efa]">
                Discover,
              </span>

              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#9176ff] from-20% via-[#846cf7] via-30% to-[#8b71f5]">
                Develop,
              </span>

              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ebca96] from-20% via-[#dfabb8] via-30% to-[#f8e974]">
                Deploy
              </span>
            </h1>
            <p class="text-white text-4xl tracking-[2px]  mt-6">
              the true potential of your business with our digital engineering
              services
            </p>

            <Button
              variant="outlined"
              className="!border-zinc-300 !mt-[50px] !p-3 !pr-5 !pl-5 !text-slate-200 !rounded-xl !capitalize !text-lg !border-2"
            >
              
              Let’s Discuss Opportunities
              <span className="!ml-4">
                <ChevronRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
