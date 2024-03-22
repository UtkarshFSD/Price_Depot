import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <section class="relative ">
      <div class="h-screen">
        <div class="relative overflow-hidden h-full">
          <figure class="bg-no-repeat bg-cover h-[850px] w-full absolute top-0 left-0 right-0 z-10">
            <img
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/contact-bg-banner-desktop.webp"
              alt="About Us"
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-transparent text-7xl text-center font-bold bg-clip-text bg-gradient-to-br from-[#83aaff]  to-[#254975]">
                Contact Us
              </h1>
           
            <p class="text-white text-4xl tracking-[2px]  mt-6">
              Kickstart Your Digital Journey Today
            </p>
            <p className="text-2xl mt-3 text-white tracking-wider">
              Get all your questions answered by our business development team.
            </p>
            <div className="flex items-center gap-2 flex-col">
            <Button
              variant="outlined"
              className="!border-zinc-300 !mt-[50px] !p-3 !pr-5 !pl-5 !text-slate-200 !rounded-xl !capitalize !text-lg !border-2"
            >
            For Business
            </Button>
            <Button
              variant="outlined"
              className="!border-zinc-300  !p-3 !pr-5 !pl-5 !text-slate-200 !rounded-xl !capitalize !text-lg !border-2"
            >
              For Career
            </Button>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
