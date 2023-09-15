import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home/Home';
import Burger from './Burger/Burger';
import Specialburger from './SpecialBurger/Specialburger';
import Aboutus from './Aboutus/Aboutus';
import Contact from './Conatct/Contact';
import Newdishes from './Newdishes/Newdishes';
import Register from './Register/Register';
import Signup from './Signup/Signup';
import OrderForm from './Ordernow/Order';
import PaymentForm from './Payment/Payment';
import Cart from './Cart/Cart';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      
        <Routes>

         <Route path="/"  element={<Home/>}/>
         <Route path="/burger"  element={<Burger/>}/>
         <Route path="/spclburger" element={<Specialburger/>}/>
         <Route path="/aboutus" element={<Aboutus/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/newdishes" element={<Newdishes/>} />
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/register" element={<Register/>}/>
       
         <Route path="/payment" element={<PaymentForm/>} />
         <Route path="/cart" element={<Cart/>} />

       </Routes>

       <Footer/>
    </BrowserRouter>
     
    </>
  );
}

export default App;
