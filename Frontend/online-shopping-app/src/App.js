import logo from "./logo.svg";
import Login from './Components/Login';
import Register from './Components/Register'
import Nav from "./Layouts/Nav";
import ProductForm from "./Components/ProductForm";
import ViewCart from "./Components/ViewCart";
import ProtectedRoute from "./ProtectedRoute";
import ViewOrder from "./Components/ViewOrder";
import ViewSellerProducts from "./Components/ViewSellerProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Home from "./Components/Home";
import ViewProduct from "./Components/ViewProduct";
import Profile from "./Components/Profile";
import Aboutus from "./Components/Aboutus";
import ViewOrderItem from "./Components/ViewOrderItem";
function App() {
  return (
    <Router>
            <nav>
              <Nav />
              </nav>
            <Routes>

          
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/aboutus" element={<Aboutus/>} />

            <Route element={<ProtectedRoute />} >
            <Route path="/addproduct" element={<ProductForm/>} />
            <Route path="/viewproduct" element={<ViewProduct/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/viewcart" element={<ViewCart/>} />
            <Route path="/vieworderitem" element={<ViewOrderItem/>} />
            <Route path="/vieworder" element={<ViewOrder/>} />
            <Route path="/viewProductList" element={<ViewSellerProducts/>} />
            </Route>
              
              
            </Routes>
        </Router>
  );
}

export default App;
