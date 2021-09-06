import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cta from './components/Cta';
import "./scss/_globals.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <Features />
        <About />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
