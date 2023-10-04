
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Property from './components/Properties';
import Signup from './components/signUp';
import Login from './components/login';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App">

    <Header></Header>

    <nav className='flex flex-wrap'>
    <ul  className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-x-4 mx-auto py-4 justify-items-end ">
        <li> <NavLink to = '/'>HOME</NavLink> </li>
        <li> <NavLink to='/properties'>Properties</NavLink></li>
        <li> <NavLink to='/properties'>Tokenization</NavLink></li>
        <button><NavLink to='/signup'>SignUp</NavLink></button>
      <button><NavLink to='/Login'>Login</NavLink></button>
        
    </ul>

  

    </nav>


    <Routes>


      <Route path='/' element={<Homepage></Homepage>}></Route>

      <Route path='/properties' element={<Property></Property>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
    </Routes>

    <Footer></Footer>
    
    </div>
  );
}

export default App;
