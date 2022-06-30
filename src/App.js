import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar';
import Todo from './Components/Pages/Todo';
import Task from './Components/Pages/Task';
import Calendar from './Components/Pages/Calendar';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/task' element={<Task></Task>}></Route>
          <Route path='/todo' element={<Todo></Todo>}></Route>
          <Route path='/calendar' element={<Calendar></Calendar>}></Route>
          
      </Routes>
    </div>
  );
}

export default App;
