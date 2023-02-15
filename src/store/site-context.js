import React from "react";

const SiteContext = React.createContext({
  cryptoData: {},
  lang: {},
  responsiveNav: null,
  setResponsiveNav: () => {},
  setLang: () => {},
});

export default SiteContext;
