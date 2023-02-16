import { LanguageSelector } from "../Header";
import { Button } from "../Shared";

const Nav = ({ navs }) => {
  return (
    <>
      <nav className="">
        {navs.map((i) => (
          <Button key={i.id} href={i.url}>
            {i.title}
          </Button>
        ))}
      </nav>
      <LanguageSelector/>
      <Button href='/'>Login</Button>
    </>
  );
};

export default Nav;
