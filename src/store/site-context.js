import React from "react";

const SiteContext = React.createContext({
  cryptoData: {},
  firstErrorFetch: false,
  setFirstErrorFetch: () => {},
  lang: {},
  responsiveNav: null,
  setResponsiveNav: () => {},
  setLang: () => {},
});

export default SiteContext;
