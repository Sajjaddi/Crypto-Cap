import { LanguageSelector } from "../Header";
import { Link } from "../Shared";

const Nav = ({ navs }) => {
  return (
    <>
      <nav className="">
        {navs.map((i) => (
          <Link key={i.id} href={i.url}>
            {i.title}
          </Link>
        ))}
      </nav>
      <LanguageSelector/>
      <Link href='/'>Login</Link>
    </>
  );
};

export default Nav;
