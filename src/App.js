import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import { useState } from 'react';



function App() {

  const [alert, setAlert] = useState();

      const showAlert = (message , type) => {
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null)
        } , 1500)
      }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <NavBar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/about/*" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
