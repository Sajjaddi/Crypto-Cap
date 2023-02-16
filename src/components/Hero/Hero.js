import { Link } from "../Shared";

const Hero = () => {
  const data = {
    title: "Start and Build Your Crypto Portfolio Here",
    subtitle:
      "Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.",
    buttonText: "Get Starterd",
  };
  return (
    <>
      <h2 className="text-2xl text-center px-2 xs:px-4">{data.title}</h2>
      <p className="font-light px-10 text-center text-[15px]">{data.subtitle}</p>
      <Link href={'/'} primary className={'py-4 px-6 rounded-[10px]'}>{data.buttonText}</Link>
    </>
  );
};

export default Hero;
