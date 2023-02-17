import { Button } from "../Shared";

const Hero = () => {
  const data = {
    title: "Start and Build Your Crypto Portfolio Here",
    subtitle:
      "Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.",
    buttonText: "Get Starterd",
  };

  const firstBrightness =
    "after:content-[''] after:z-0 after:absolute after:right-0 after:h-full after:md:right-[20%] after:2xl:right-[28%] after:lg:h-3/4 after:w-1/4 after:blur-[200px] md:after:blur-[220px] after:bg-tara-firstBrightnessHero";
  const secondBrightness =
    "before:content-[''] before:z-0 before:absolute before:left-0 before:md:left-[20%] before:2xl:right-[28%] before:h-full before:lg:h-3/4 before:w-1/4 before:blur-[200px] md:before:blur-[220px] before:bg-tara-secondBrightnessHero";
  return (
    <>
      <div className={`${firstBrightness} ${secondBrightness}`} />
      <h2 className="text-2xl lg:text-3xl text-center px-2 xs:px-4 md:px-6 lg:px-8 z-[1]">
        {data.title}
      </h2>
      <p className="px-10 text-center text-[15px] sm:w-2/3 lg:w-[500px] text-tara-fifth z-[1]">
        {data.subtitle}
      </p>
      <Button
        href={"/"}
        primary
        className={"py-4 px-6 lg:px-8 rounded-[10px] z-[1]"}
      >
        {data.buttonText}
      </Button>
    </>
  );
};

export default Hero;
