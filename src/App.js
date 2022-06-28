//import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
