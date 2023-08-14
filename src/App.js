import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Trek from './Pages/Trek/Trek';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import PrivateRoute from './PrivateRoute';
import UserHome from './Pages/UserHome/UserHome';
import Product from './Pages/Productpage/Product';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';


function App() {
  return (
    <div className="App">
   
      <Routes >
  
        <Route path='/' element={<Home /> }/>
        <Route path='/trek' element={<Trek /> }/>
        <Route path='/about' element={<About /> }/>
        <Route path='/contact' element={<Contact /> }/>
        <Route path='/dest' element={<Product /> }/>
        <Route path="/forgotpassword/:id/:token" element={<ForgotPassword/>} />

        <Route path='/user' element={<PrivateRoute /> } >
          <Route path='home' element={<UserHome /> } ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
