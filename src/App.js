import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarketTrend } from "./components/MarketTrend";
import { MarketUpdate } from "./components/MarketUpdate";

const App = () => {
  return (
    <>
      <header>
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
    </>
  );
};

export default App;
