import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {

  return(
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;