import { Footer, Hero, Navbar, Features, Info } from './components/sections'
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const App = () => {

  return (
      <BrowserRouter>
      <div className='bg-gray-100'>
        <Navbar/>
        <Hero/>
      </div>
      <div className="bg-red-200">
        <Features />
        <Info />
      </div>
      <div className="footer-end">
        <Footer />
      </div>
      
     
      </BrowserRouter>
      
  );
};

export default App
