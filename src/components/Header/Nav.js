import { LanguageSelector } from "../Header";
import { Link } from "../Shared";

const Nav = ({ navs, lang }) => {
  return (
    <>
      <nav className="">
        {navs.map((i) => (
          <Link key={i.id} href={i.url}>
            {i.title}
          </Link>
        ))}
      </nav>
      <LanguageSelector langData={lang} />
      <Link>Login</Link>
    </>
  );
};

export default Nav;
