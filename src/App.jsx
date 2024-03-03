import { Footer, Hero, Navbar, Features, Info, TechCard, Contribution, Graphic } from './components/sections'
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const App = () => {

  return (
      <BrowserRouter>
        <div className='bg-white'>
          <Navbar/>
          <Hero/>
        </div>
        <div className="bg-slate-400">
          <Features />
          <TechCard />
          <Info />
          <Graphic />
          <Contribution />
        </div>
        <div className="footer-end">
          <Footer />
        </div>
      </BrowserRouter>
      
  );
};

export default App
