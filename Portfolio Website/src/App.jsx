import style from './App.module.css';
import Hero from './Components/Hero/Hero.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App;
