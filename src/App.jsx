import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Project from './components/Project/Project'
import css from './styles/App.module.scss'

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <About/>
    <Project/>
  </div>;
};

export default App;
