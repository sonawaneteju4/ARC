import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Index from './Components/LandingPage.js/Index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <div>
      <Index/>
      {/* <LandingPage/> */}
    </div>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
