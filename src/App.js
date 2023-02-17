import { useContext } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarketTrend } from "./components/MarketTrend";
import { MarketUpdate } from "./components/MarketUpdate";
import { SiteContext } from "./store";

const App = () => {
  const { errorFetch, responsiveNav } = useContext(SiteContext);

  return (
    <div
      className={`bg-tara-prime text-white overflow-x-hidden relative  ${
        responsiveNav || (errorFetch && "max-h-screen overflow-y-hidden")
      }`}
    >
      {errorFetch ? (
        <div className="flex-col md:flex-row gap-y-6 w-full h-full inset-0 backdrop-blur-xl absolute z-20 justify-center items-center flex">
          <AiOutlineLoading3Quarters className="text-7xl animate-spin" />
          <div className="ml-4 flex items-center flex-col md:items-start">
            <span className="text-xl">Please wait ...</span>
            <span className="text-tara-sixth">It may take up to <span className="font-roboto">1</span> minute for the API</span>
          </div>
        </div>
      ) : null}
      <header className="px-2 xs:px-4 md:px-6 lg:px-8 mx-auto max-w-8xl lg:py-4 py-2 flex justify-between items-center lg:grid lg:grid-cols-12">
        <Header />
      </header>
      <main className="z-1">
        <section
          className={`flex flex-col items-center gap-y-8 mt-10 lg:mt-20 relative`}
        >
          <Hero />
        </section>
        <section className="mt-24 px-2 xs:px-4 md:px-6 lg:px-8 max-w-8xl mx-auto z-[1] relative">
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
