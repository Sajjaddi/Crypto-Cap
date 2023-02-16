import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

import { Button } from "../Shared";

const Footer = () => {
  const data = {
    title: "CryptoCap",
    socialMedia: [
      { id: 1, text: "instagram", url: "/" },
      { id: 2, text: "facebook", url: "/" },
      { id: 3, text: "twitter", url: "/" },
      { id: 4, text: "youtube", url: "/" },
    ],
    copyright: "2021 CoinMarketCap. All rights reserved",
    navs: [
      {
        title: "About Us",
        navs: [
          { id: 1, text: "About", url: "/" },
          { id: 2, text: "Careers", url: "/" },
          { id: 3, text: "Blog", url: "/" },
          { id: 4, text: "Legal & privacy", url: "/" },
        ],
      },
      {
        title: "Services",
        navs: [
          { id: 1, text: "Applications", url: "/" },
          { id: 2, text: "Buy Crypto", url: "/" },
          { id: 3, text: "Affilliate", url: "/" },
          { id: 4, text: "Institutional Services", url: "/" },
        ],
      },
      {
        title: "Learn",
        navs: [
          { id: 1, text: "What is Cryptocurrency", url: "/" },
          { id: 2, text: "Crypto Basic", url: "/" },
          { id: 3, text: "Tips and Tutorials", url: "/" },
          { id: 4, text: "Market Update", url: "/" },
        ],
      },
    ],
  };

  return (
    <>
      <div>
        <Button href="/" className="text-2xl w-fit">
          <span>{data.title.slice(0, -3)}</span>
          <span className="text-tara-second">{data.title.slice(-3)}</span>
        </Button>
        <div className="hidden lg:flex flex-col lg:items-start mt-20 gap-y-6">
          <div className="flex gap-x-4 justify-center lg:justify-start">
            {data.socialMedia.map((i) => {
              switch (i.text) {
                case "instagram":
                  return (
                    <Button key={i.id} href={i.url}>
                      <BsInstagram className="text-tara-fifth text-2xl hover:text-tara-second transition" />
                    </Button>
                  );
                case "facebook":
                  return (
                    <Button key={i.id} href={i.url}>
                      <BsFacebook className="text-tara-fifth text-2xl hover:text-tara-second transition" />
                    </Button>
                  );
                case "twitter":
                  return (
                    <Button key={i.id} href={i.url}>
                      <BsTwitter className="text-tara-fifth text-2xl hover:text-tara-second transition" />
                    </Button>
                  );
                case "youtube":
                  return (
                    <Button key={i.id} href={i.url}>
                      <BsYoutube className="text-tara-fifth text-2xl hover:text-tara-second transition" />
                    </Button>
                  );
                default:
                  break;
              }
            })}
          </div>
          <p className="lg:border-none text-tara-fifth font-roboto text-sm border-t border-tara-fifth border-opacity-40 py-2">
            {data.copyright}
          </p>
        </div>
      </div>
      <div className="lg:hidden flex mt-10 lg:mt-0 gap-x-4 justify-center lg:justify-start">
        {data.socialMedia.map((i) => {
          switch (i.text) {
            case "instagram":
              return (
                <Button key={i.id} href={i.url}>
                  <BsInstagram className="text-tara-fifth text-2xl hover:text-tara-second transition" />
                </Button>
              );
            case "facebook":
              return (
                <Button key={i.id} href={i.url}>
                  <BsFacebook className="text-tara-fifth text-2xl hover:text-tara-second transition" />
                </Button>
              );
            case "twitter":
              return (
                <Button key={i.id} href={i.url}>
                  <BsTwitter className="text-tara-fifth text-2xl hover:text-tara-second transition" />
                </Button>
              );
            case "youtube":
              return (
                <Button key={i.id} href={i.url}>
                  <BsYoutube className="text-tara-fifth text-2xl hover:text-tara-second transition" />
                </Button>
              );
            default:
              break;
          }
        })}
      </div>
      <div className="mt-10 lg:mt-0 text-center flex flex-col gap-y-14 lg:grid lg:grid-cols-3 lg:gap-x-10">
        {data.navs.map((i) => (
          <div key={i.title} className="flex flex-col items-center gap-y-6">
            <span className="text-[#ECF1F0] border-b pb-1 border-[#ECF1f0]">
              {i.title}
            </span>
            <div className="text-center flex flex-col gap-y-4">
              {i.navs.map((child) => (
                <Button
                  className={"text-tara-fifth flex text-sm justify-center transition hover:text-tara-second"}
                  key={child.id}
                  href={child.url}
                >
                  {child.text}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="lg:border-none text-tara-fifth lg:hidden font-roboto text-sm mt-20 border-t border-tara-fifth border-opacity-40 py-2">
        {data.copyright}
      </p>
    </>
  );
};

export default Footer;
