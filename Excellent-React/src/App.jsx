import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Specialties from './Pages/LandingPage/Specialties';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Specialties />}
        />
      </Routes >
    </BrowserRouter>
  )
}

export default App
