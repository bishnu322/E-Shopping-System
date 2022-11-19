// import logo from './logo.svg';
import './App.css';
// import Store from './store/Store';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './component/Cart';
import Home from './component/Home';
import SignIn from './component/SignIn'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
