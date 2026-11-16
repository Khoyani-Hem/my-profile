import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './App.css';

function App() {

  return(
    <div className="min-h-screen flex flex-col">
		
    	<Navbar />

      	<main>

        	<Hero />
        	<About />

      	</main>

    </div>
  );
}

export default App;