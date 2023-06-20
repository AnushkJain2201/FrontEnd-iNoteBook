import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about/*" element={<About />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
