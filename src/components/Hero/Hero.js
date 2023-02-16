import { Button } from "../Shared";

const Hero = () => {
  const data = {
    title: "Start and Build Your Crypto Portfolio Here",
    subtitle:
      "Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.",
    buttonText: "Get Starterd",
  };
  return (
    <>
      <h2 className="text-2xl lg:text-3xl text-center px-2 xs:px-4 md:px-6 lg:px-8">
        {data.title}
      </h2>
      <p className="px-10 text-center text-[15px] sm:w-2/3 lg:w-[500px] text-tara-fifth">
        {data.subtitle}
      </p>
      <Button href={"/"} primary className={"py-4 px-6 lg:px-8 rounded-[10px]"}>
        {data.buttonText}
      </Button>
    </>
  );
};

export default Hero;
