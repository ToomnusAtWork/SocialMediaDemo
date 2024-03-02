import { Footer, Hero, Navbar, Features, Info, TechCard, Contribution, Graphic } from './components/sections'
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const App = () => {

  return (
      <BrowserRouter>
      <div className='bg-gray-100'>
        <Navbar/>
        <Hero/>
      </div>
      <div className="bg-gray-200">
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
