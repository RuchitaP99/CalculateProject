// import logo from './logo.svg';
import './App.css';

import { BrowserRouter ,Route,Routes } from 'react-router-dom';
// import Login from './components/Login';
 import Home from './components/Home/Home';
import Info from './components/Home/Info';
import Age from './components/Home/Age';
import BMI from './components/Home/BMI';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>    
    <Routes>
      {/* <Route  path='/login' element={<Login/>}></Route> */}
      <Route path='/' element={<Login/>}> </Route>
      <Route path='/info' element={<Info/>}></Route>
      <Route path='/home' element={<Home/>}> </Route>
      <Route path='/age' element={<Age/>}> </Route>
      <Route path='/bmi' element={<BMI/>}> </Route>
      
      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
