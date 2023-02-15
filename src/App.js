import { useContext } from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarketTrend } from "./components/MarketTrend";
import { MarketUpdate } from "./components/MarketUpdate";
import { SiteContext } from "./store";

const App = () => {
  const { responsiveNav } = useContext(SiteContext);

  return (
    <div className={`bg-tara-prime text-white ${responsiveNav && 'overflow-y-hidden'}`}>
      <header className="px-2 xs:px-4 py-2 flex justify-between items-center">
        <Header />
      </header>
      <main>
        <div>
          <Hero />
        </div>
        <div>
          <MarketTrend />
        </div>
        <div>
          <MarketUpdate />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
