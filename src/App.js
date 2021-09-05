import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import "./scss/_globals.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <About />
    </div>
  );
}

export default App;
