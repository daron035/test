// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import styles from "./index.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./hocs/Layout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ResetPassword from "./pages/auth/ResetPassword";
import ResetPasswordConfirm from "./pages/auth/ResetPasswordConfirm";
import Activate from "./pages/auth/Activate";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderSummary from "./components/OrderSummary";
import ProductList from "./components/ProductList";
// import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";
import CheckoutForm from "./components/Checkout";
import Profile from "./components/Profile";
// import SellingCertainItem from "./components/SellingCertainItem";
import Selling from "./pages/Selling";
import Temp from "./pages/Temp";
import TempPd from "./pages/TempPd";
import SellingList from "./components/SellingList";
import SellingCertainItem from "./components/SellingCertainItem";
import SellingSellItems from "./components/SellingSellItems";
import MyAccount from "./components/MyAccount";
import PDetail from "./components/PDetail";
import List from "./components/List";
import MySelling from "./components/MySelling";
// import List from "./components/List_copy_2";
// import Checkout from "./components/Checkout";
// import MyCheckout from "./components/Checkout";

// другая реализация в index router tutorial.jsx (без App.jsx)
function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<List />} />
            <Route path="products/:productID" element={<ProductDetail />} />
            <Route path="order-summary" element={<OrderSummary />} />
            <Route path="checkout" element={<CheckoutForm />} />
            <Route path="profile" element={<Profile />} />

            <Route path="asdf" element={<Temp />} />
            <Route path="asdfg" element={<TempPd />} />

            <Route path="account" element={<MyAccount />} />
            <Route path="account/selling" element={<MySelling />} />
          </Route>

          <Route path="/selling" element={<Selling />}>
            <Route index element={<SellingList />} />
            <Route path="new" element={<SellingCertainItem />} />
            <Route path="new/:sku" element={<SellingSellItems />} />
          </Route>

          {/* <Route path="/selling/new" element={<SellingCertainItem />} /> */}
          {/* <Route path="/selling/new/:sku" element={<SellingSellItems />} /> */}
          {/* <Route path="/order-summary" element={<OrderSummary />}></Route> */}

          <Route path="/login" element={<Login />} />
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
