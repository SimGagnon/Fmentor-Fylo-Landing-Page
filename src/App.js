import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import "./scss/_globals.scss"



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
