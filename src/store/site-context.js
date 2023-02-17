import React from "react";

const SiteContext = React.createContext({
  cryptoData: {},
  errorFetch: false,
  setErrorFetch: () => {},
  lang: {},
  responsiveNav: null,
  setResponsiveNav: () => {},
  setLang: () => {},
});

export default SiteContext;
