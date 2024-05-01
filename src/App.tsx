import "./App.css";
import Banner from "./components/pages/home/Banner";
import PortfolioIntro from "./components/pages/home/PortfolioIntro";
import ServiceItem from "./components/pages/home/ServiceItem";
import Article from "./components/pages/home/Article";
// import Portfolio from "./components/pages/Portfolio";
function App() {
  return (
    <div className=" container ">
      {/* <Portfolio /> */}

      <Banner />
      <PortfolioIntro />
      <ServiceItem />
      <Article />
    </div>
  );
}

export default App;
