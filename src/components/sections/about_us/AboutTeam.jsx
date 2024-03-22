import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const AboutTeam = () => {
  const pointsAboutTeam = [
    "Suspendisse ullamcorper soft clinical in easy.",
    "It is also a great clinic for the weekend.",
    "Until the fringilla wants to laugh, who is in the investment of ugly euismod?",
    "Some of the pulvinar diam was for the children, the layer of the Moors.",
  ];
  return (
    <section class="bg-[url('https://samartheme2.vercel.app/images/background/bg15.png')] flex justify-start items-center gap-24">
      <div class="w-1/2 ">
        <img
          src="https://samartheme2.vercel.app/images/about/pic1.jpg"
          alt="team"
          class="rounded-r-[100px]"
        />
      </div>

      <div class="w-1/3">
        <div class="flex flex-col gap-[20px]">
          <button className="mb-4 text-lg font-semibold text-heading-1  p-3 rounded-xl bg-gradient-to-tr from-blue-600 to-green-400 w-fit">
            ABOUT US
          </button>
          <h1 class="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
            We Have A Creative Team To Build Your Website Better
          </h1>
          <p class="text-lg text-heading-3">
            In fact, I am pregnant even if I am pregnant, but the airline is
            afraid of ultricies. He wants to play football tomorrow. Lives are
            flattering, the pain is like a makeup truck, from a real estate
            agent, not an employee, and no one. But Euismod turpis always
            accepts that level. The children's laughter is a source of laughter.
          </p>
          <div>
            {pointsAboutTeam.map((point, index) => (
              <div key={index} class="flex gap-2 mb-4">
                <CheckCircleOutlineIcon className="text-blue-600 mr-2" />
                <p class="text-lg text-heading-3 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
