import { LanguageSelector } from "../Header";
import { Button } from "../Shared";

const Nav = ({ navs }) => {
  return (
    <>
      <nav className="hidden lg:flex justify-center gap-x-8 2xl:gap-x-10 lg:col-start-4 lg:col-end-10">
        {navs.map((i) => (
          <Button className={'hover:text-tara-second duration-200 transition-all text-base'} key={i.id} href={i.url}>
            {i.title}
          </Button>
        ))}
      </nav>
      <div className="hidden lg:flex lg:justify-end lg:items-center gap-x-4 lg:col-start-10 lg:col-end-13">
        <LanguageSelector />
        <Button href={"/"} primary className={"py-3 px-8 rounded-md w-fit text-sm"}>
          Login
        </Button>
      </div>
    </>
  );
};

export default Nav;
