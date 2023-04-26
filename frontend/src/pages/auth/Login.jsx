import React from "react";
import Navbar2 from "../../components/snippets/Navbar2";

const Login = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div>
      <Navbar2 />
      <div className="w-[560px] mx-auto px-[40px] pt-[64px] pb-[100px]">
        <h1 className="mb-[10px] uppercase font-sans font-bold text-5xl tracking-[.2em] subpixel-antialiased">
          Log In
        </h1>
        <form className="mb-[28px]">
          <div className="mb-[28px]">
            <label className="text-xs text-[#777777] mb-[6px]" for="user_email">
              Email
            </label>
            <input
              className="border-[1px] block w-full p-[14px]"
              type="email"
              name="user[email]"
              id="user_email"
              required
            />
          </div>
          <div className="mb-[28px]">
            <label className="text-xs text-[#777777] mb-[6px]" for="user_email">
              Password
            </label>
            <input
              className="border-[1px] block w-full p-[14px]"
              type="password"
              name="user[email]"
              id="user_email"
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

export default Login;
