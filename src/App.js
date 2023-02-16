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
    "after:content-[''] after:absolute after:right-0 after:h-full after:md:right-[20%] after:2xl:right-[28%] after:lg:h-3/4 after:w-1/4 after:blur-[200px] md:after:blur-[220px] after:bg-tara-firstBrightnessHero";
  const secondBrightness =
    "before:content-[''] before:absolute before:left-0 before:md:left-[20%] before:2xl:right-[28%] before:h-full before:lg:h-3/4 before:w-1/4 before:blur-[200px] md:before:blur-[220px] before:bg-tara-secondBrightnessHero";

  return (
    <div
      className={`bg-tara-prime text-white relative  ${
        responsiveNav && "h-screen overflow-y-hidden"
      }`}
    >
      <header className="px-2 xs:px-4 md:px-6 lg:px-8 mx-auto max-w-8xl lg:py-4 py-2 flex justify-between items-center lg:grid lg:grid-cols-12">
        <Header />
      </header>
      <main>
        <section
          className={`flex flex-col items-center gap-y-8 mt-10 lg:mt-20 relative ${firstBrightness} ${secondBrightness}`}
        >
          <Hero />
        </section>
        <section className="mt-24 px-2 xs:px-4 md:px-6 lg:px-8 max-w-8xl mx-auto">
          <MarketTrend />
        </section>
        <section className="mt-24 mx-auto max-w-8xl">
          <MarketUpdate />
        </section>
      </main>
      <footer className="mx-auto max-w-8xl mt-10 lg:pb-10 border-t lg:flex lg:justify-between lg:items-start border-[rgba(255,255,255,0.05)] pt-10 px-2 xs:px-4 md:px-6 lg:px-8">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
