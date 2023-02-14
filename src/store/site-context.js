import React from "react"
const SiteContext = React.createContext({
    cryptoData: {},
    lang: [],
    changeLang: ()=>{},
    responsiveNav: null,
    changeResponsiveNav : ()=> {},
})

export default SiteContext