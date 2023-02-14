import ReactDOM from "react-dom/client";

import App from "./App";
import SiteProvider from "./store/SiteProvider";
import "./styles.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<SiteProvider>
    <App />
</SiteProvider>);
