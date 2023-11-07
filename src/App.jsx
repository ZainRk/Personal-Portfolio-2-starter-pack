import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experties from "./components/Experties/Experties";
import Work from "./components/Work/Work";
import css from "./styles/app.module.scss";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Galery from "./components/Galery/Galery";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      {/* <Galery /> */}
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;
