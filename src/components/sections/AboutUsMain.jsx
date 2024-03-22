const AboutUsMain = () => {
  return (
    <section class="relative">
      <div class="h-screen">
        <div class="relative overflow-hidden h-full">
          <figure class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
            <img
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/career-img1.webp"
              alt="About Us"
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 class="text-white font-extrabold text-4xl/tight sm:text-5xl/tight md:text-6xl/tight xl:text-7xl/tight">
              Transforming Your Digital Identity With Innovation
            </h1>
            <p class="text-white font-medium md:text-2xl mt-6 text-lg">
              We transform visions into vibrant digital realities. Specializing
              in web design and development, we ensure your digital presence is
              as unique as your brand, making lasting impressions in the digital
              world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMain;
