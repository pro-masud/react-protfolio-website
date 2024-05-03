import style from './App.module.css';
import About from './Components/About/About.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App;
