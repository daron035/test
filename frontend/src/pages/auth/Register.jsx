import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar2 from "../../components/snippets/Navbar2";
import { connect } from "react-redux";
import { signup } from "../../store/actions/auth";

const Register = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    re_password: "",
  });

  const { email, username, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    if (password === re_password) {
      signup(email, username, password, re_password);
      setAccountCreated(true);
    }
  };

  // Is the user authenticated?
  // Redirect the, to the home page
  if (isAuthenticated) {
    // Redirect - это теперь Navigate
    // return <Navigate to="/" />;
    console.log("NO")
  }
  if (accountCreated) {
    // return <Navigate to="users/sign_up" />;
    console.log("OOOOOK")
  }

  return (
    <div>
      <Navbar2 />
      <div className="w-[560px] mx-auto px-[40px] pt-[64px] pb-[100px]">
        <h1 className="mb-[30px] uppercase font-sans font-bold text-5xl tracking-[.2em] subpixel-antialiased">
          Register
        </h1>
        <form className="mb-[24px]" onSubmit={(e) => onSubmit(e)}>
          <div className="mb-[24px]">
            <label className="text-xs text-[#777777] mb-[6px]" for="user_email">
              First Name
            </label>
            <input
              className="border-[1px] block w-full p-[14px]"
              type="text"
              name="username"
              id="First name"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="mb-[24px]">
            <label className="text-xs text-[#777777] mb-[6px]" for="user_email">
              Last Name
            </label>
            <input
              className="border-[1px] block w-full p-[14px]"
              type="text"
              name="user[last_name]"
              id="Last name"
              // onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="mb-[24px]">
            <label className="text-xs text-[#777777] mb-[6px]" for="user_email">
              Email
            </label>
            <input
              className="border-[1px] block w-full p-[14px]"
              type="email"
              name="email"
              id="Email"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="mb-[24px]">
            <label className="text-xs text-[#777777] mb-[6px]" for="user_email">
              Re-Enter Email
            </label>
            <input
              className="border-[1px] block w-full p-[14px]"
              type="email"
              name="user[email_confirmation]"
              id="Email confirmation"
              // onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="mb-[24px]">
            <label className="text-xs text-[#777777] mb-[6px]" for="user_email">
              Password
            </label>
            <input
              className="border-[1px] block w-full p-[14px]"
              type="password"
              name="password"
              id="Password"
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="mb-[24px]">
            <label className="text-xs text-[#777777] mb-[6px]" for="user_email">
              Re-Enter Password
            </label>
            <input
              className="border-[1px] block w-full p-[14px]"
              type="password"
              name="re_password"
              id="Password confirmation"
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div>
            <input
              className="mr-[13px] accent-black outline-[#D0D0D0]"
              type="checkbox"
              id="check"
            />
            <label className="text-[#101010] text-sm" for="check">
              Remember Me
            </label>
          </div>
          <div className="my-[10px]">
            <input
              className="w-full bg-[#101010] text-white py-[16px] text-lg tracking-wider"
              type="submit"
              value="LOG IN"
            />
          </div>
        </form>
        <p className="text-sm tracking-tight font-semibold underline">
          <a className="pr-[10px] mr-[10px] border-r-[1px]" href="#">
            Sign Up
          </a>
          <a className="pr-[10px] mr-[10px] border-r-[1px]" href="#">
            Forgot Your Password?
          </a>
          <a href="#">Didn't Receive Confimation Instructions?</a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Register);
// export default Register;
