import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>

          <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
