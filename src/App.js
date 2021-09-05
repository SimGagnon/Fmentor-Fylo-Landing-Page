import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import "./scss/_globals.scss"



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
