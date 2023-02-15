import { useState } from "react";

import SiteContext from "./site-context";

const SiteProvider = ({ children }) => {
  const [responsiveNav, setResponsiveNav] = useState(true);
  const [lang, setLang] = useState({
    current: "en",
    all: ["en", "fa"],
  });

  const siteContext = {
    responsiveNav,
    setResponsiveNav,
    lang,
    setLang,
  };

  return (
    <SiteContext.Provider value={siteContext}>{children}</SiteContext.Provider>
  );
};

export default SiteProvider;
