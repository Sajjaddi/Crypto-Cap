import { useContext } from "react";

import { SiteContext } from "../../store";
import { LanguageSelector } from "../Header";
import { Button } from "../Shared";

const ResponsiveNav = ({ data }) => {
  const { responsiveNav, setResponsiveNav } = useContext(SiteContext);

  const handleResponsiveNav = () => {
    setResponsiveNav((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={`absolute h-full w-full inset-0 z-[5] backdrop-blur-sm select-none ${
          responsiveNav ? "visible" : "invisible"
        }`}
      />
      <div
        onClick={handleResponsiveNav}
        className="z-10 relative select-none flex flex-col gap-y-1.5 items-center cursor-pointer"
      >
        <span
          className={`duration-300 left-0 w-7 h-0.5 bg-white -top-1 transition origin-left ${
            responsiveNav && "rotate-45 w-[22.5px]"
          }`}
        ></span>
        <span
          className={`duration-300 left-0 w-7 h-0.5 bg-white top-[5px] transition ${
            responsiveNav && "invisible"
          }`}
        ></span>
        <span
          className={`duration-300 left-0 w-7 h-0.5 bg-white top-3.5 transition origin-left ${
            responsiveNav && "-rotate-45 w-[22.5px]"
          }`}
        ></span>
      </div>
      <nav
        className={`absolute overflow-hidden z-10 top-0 bottom-0 right-0 max-w-xs transition-all duration-[.4s] bg-tara-prime bg-opacity-50 backdrop-blur-md ${
          responsiveNav
            ? "translate-x-0 visible w-[80%] xs:w-[70%]"
            : "invisible translate-x-[105%] w-0 p-0"
        }`}
      >
        <div className="py-4 px-2">
          <Button href='/' className="text-2xl mb-6">
            <span>{data.title.slice(0, -3)}</span>
            <span className="text-tara-second">{data.title.slice(-3)}</span>
          </Button>
          <div className="flex justify-between items-center gap-x-4">
            <LanguageSelector />
            <Button href={"/"} primary className={"py-3 px-8 rounded-md w-fit"}>
              Login
            </Button>
          </div>
          <div className="flex flex-col gap-y-8 justify-center items-center mt-16 [&>a]:border-b-2">
            {data.navs.map((i) => (
              <Button
                className={
                  "hover:text-tara-second transition hover:border-tara-second"
                }
                key={i.id}
                href={i.url}
              >
                {i.title}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveNav;
