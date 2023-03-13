import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experiment from './components/Experiment/Experiment'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import css from './styles/App.module.scss'

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <About/>
    <Project/>
    <Experiment/>
    <Contact/>
  </div>;
};

export default App;
