import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

import SignUp from "./pages/Register";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={Success} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
