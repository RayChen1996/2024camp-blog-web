import "./App.css";
import Banner from "./components/pages/home/Banner";
import PortfolioIntro from "./components/pages/home/PortfolioIntro";
import ServiceItem from "./components/pages/home/ServiceItem";
import Article from "./components/pages/home/Article";
import Block from "./components/Block";
// import Portfolio from "./components/pages/Portfolio";
function App() {
  return (
    <div className=" w-full  h-full bg-white ">
      {/* <Portfolio /> */}

      <Banner />
      <PortfolioIntro />
      <ServiceItem />
      <Block />
      <Article />
    </div>
  );
}

export default App;
