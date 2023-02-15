import { Nav, ResponsiveNav } from "../Header";

const Header = () => {
  const data = {
    title: "CryptoCap",
    navs: [
      {
        id: 1,
        title: "Home",
        url: "/",
      },
      {
        id: 2,
        title: "Businesses",
        url: "/",
      },
      {
        id: 3,
        title: "Trade",
        url: "/",
      },
      {
        id: 4,
        title: "Market",
        url: "/",
      },
      {
        id: 5,
        title: "Learn",
        url: "/",
      },
    ],
  };

  // title to capital pase

  return (
    <>
      <div className="lg:hidden">
        <ResponsiveNav data={data} />
      </div>
      <h1 className="text-2xl">
        <span>{data.title.slice(0, -3)}</span>
        <span className="text-tara-second">{data.title.slice(-3)}</span>
      </h1>
      <div className="hidden lg:block">
        <Nav navs={data.navs} />
      </div>
    </>
  );
};

export default Header;
