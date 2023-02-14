import { useReducer } from "react"
import SiteContext from "./site-context"

const defaultSiteState = {
    cryptoData: {},
    responsiveNav: false,
    lang: []
}

const siteReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LANG': {
            return {
                ...state,
                lang: {
                    ...state.lang,
                    current: action.payload
                }
            }
        }
        case 'CHANGE_RESPONSIVE_NAV': {
            return {
                ...state,
                responsiveNav: action.payload
            }
        }
        default : {
            return state
        }
    }
}

const SiteProvider = ({children}) => {
    const [siteState, dispatchSiteAction] = useReducer(siteReducer, defaultSiteState)

    const changeResponsiveNav = (value) => {
        dispatchSiteAction({ type: 'CHANGE_RESPONSIVE_NAV' , payload: value })
    }

    const changeLang = (value) => {
        dispatchSiteAction({ type: 'CHANGE_LANG', payload: value})
    }

    const siteContext = {
        items: siteState.items,
        responsiveNav: siteState.responsiveNav,
        lang: siteState.lang,
        changeResponsiveNav: changeResponsiveNav,
        changeLang: changeLang
    }

    return (
        <SiteContext.Provider value={siteContext}>
            {children}
        </SiteContext.Provider>
    )
}

export default SiteProvider