import { useContext } from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarketTrend } from "./components/MarketTrend";
import { MarketUpdate } from "./components/MarketUpdate";
import { SiteContext } from "./store";

const App = () => {
  const { responsiveNav } = useContext(SiteContext);

  const firstBrightness =
    "after:content-[''] after:absolute after:right-0 after:h-full after:w-1/4 after:blur-[200px] after:bg-tara-firstBrightnessHero";
  const secondBrightness =
    "before:content-[''] before:absolute before:left-0 before:h-full before:w-1/4 before:blur-[200px] before:bg-tara-secondBrightnessHero";

  return (
    <div
      className={`mb-60 bg-tara-prime text-white ${
        responsiveNav && "h-screen overflow-y-hidden"
      }`}
    >
      <header className="px-2 xs:px-4 py-2 flex justify-between items-center">
        <Header />
      </header>
      <main>
        <section
          className={`flex flex-col items-center gap-y-8 mt-10 relative ${firstBrightness} ${secondBrightness}`}
        >
          <Hero />
        </section>
        <section className="mt-24 px-2 xs:px-4">
          <MarketTrend />
        </section>
        <section className="mt-24">
          <MarketUpdate />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
