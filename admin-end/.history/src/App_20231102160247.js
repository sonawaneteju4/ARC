import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Index from './Components/LandingPage.js/Index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Index/>
      {/* <LandingPage/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
