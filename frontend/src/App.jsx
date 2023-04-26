import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import OrderSummary from "./components/OrderSummary";
import Layout from "./hocs/Layout";
import "./index.css";
import Activate from "./pages/auth/Activate";
import Login from "./pages/auth/Login";
import LoginOld from "./pages/auth/LoginOld";
import ResetPassword from "./pages/auth/ResetPassword";
import ResetPasswordConfirm from "./pages/auth/ResetPasswordConfirm";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home";
import CheckoutForm from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";
import Profile from "./components/Profile";
import List from "./components/List";
import MyAccount from "./components/MyAccount";
import MySelling from "./components/MySelling";
import SellingList from "./components/SellingList";
import SellingSellItems from "./components/SellingSellItems";
import Selling from "./pages/Selling";
import Temp from "./pages/Temp";
import TempPd from "./pages/TempPd";
import HomeSlides from "./components/HomeSlides";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeSlides />} />
            <Route path="list" element={<List />} />
            <Route path="products/:productID" element={<ProductDetail />} />
            <Route path="order-summary" element={<OrderSummary />} />
            <Route path="checkout" element={<CheckoutForm />} />
            <Route path="profile" element={<Profile />} />

            <Route path="asdf" element={<Temp />} />
            <Route path="asdfg" element={<TempPd />} />
          </Route>

          <Route path="/account" element={<Selling />}>
            <Route index element={<MyAccount />} />
            <Route path="selling" element={<MySelling />} />
            <Route path="selling/new" element={<SellingList />} />
            <Route path="selling/new/:sku" element={<SellingSellItems />} />
          </Route>

          <Route path="users/sign_in" element={<Login />} />
          <Route path="users/sign_up" element={<Register />} />

          <Route path="/login" element={<LoginOld />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/activate" element={<Activate />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/uid/token"
            element={<ResetPasswordConfirm />}
          />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
