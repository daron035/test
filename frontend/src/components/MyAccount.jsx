import React from "react";

import "../styles/MyAccount.scss";
// icon-sneaker
// icon-orders
// icon-profile
// icon-address
import { ReactComponent as IconSneaker } from "../static/icon-sneaker.svg";
import { ReactComponent as IconOrders } from "../static/icon-orders.svg";
import { ReactComponent as IconProfile } from "../static/icon-profile.svg";
import { ReactComponent as IconAddress } from "../static/icon-address.svg";
import { IoIosArrowForward } from "react-icons/io";

const MyAccount = () => {
  return (
    <div className="container">
      <h2>Your Account</h2>
      <div className="score">
        <div className="flex flex-col">
          <span className="text-xl font-bold mb-[25px]">Available Balance</span>
          <span className="text-4xl my-[5px]">$0.00</span>
          <span className="tracking-normal text-sm text-[#777777]">
            $0.00 Pending
          </span>
        </div>
        <div className="flex flex-col space-y-[10px] mt-auto">
          <a className="black-button">TOP UP</a>
          <a className="white-button">WITHDRAWALS</a>
        </div>
      </div>
      <div className="menu">
        <div className="menu-item" onClick={() => console.log("111")}>
          <div className="w-[55px] h-[55px] mr-[14px]">
            <IconSneaker width="100%" height="100%" className="icon_account" />
          </div>
          <div>
            <span className="font-bold">Selling</span>
            <p className="text-sm tracking-normal">
              You are currently selling 0 items
            </p>
          </div>
          <div className="arrow">
            <IoIosArrowForward size={16} />
          </div>
        </div>
        <div className="menu-item" onClick={() => console.log("222")}>
          <div className="w-[55px] h-[55px] mr-[14px]">
            <IconOrders width="100%" height="100%" className="icon_account" />
          </div>
          <div>
            <span className="font-bold">Orders</span>
            <p className="text-sm tracking-normal">View and edit your orders</p>
          </div>
          <div className="arrow">
            <IoIosArrowForward size={16} />
          </div>
        </div>
        <div className="menu-item" onClick={() => console.log("333")}>
          <div className="w-[55px] h-[55px] mr-[14px]">
            <IconAddress width="100%" height="100%" className="icon_account" />
          </div>
          <div>
            <span className="font-bold">Addresses</span>
            <p className="text-sm tracking-normal">
              Manage your delivery addresses
            </p>
          </div>
          <div className="arrow">
            <IoIosArrowForward size={16} />
          </div>
        </div>
        <div className="menu-item" onClick={() => console.log("444")}>
          <div className="w-[55px] h-[55px] mr-[14px]">
            <IconProfile width="100%" height="100%" className="icon_account" />
          </div>
          <div>
            <span className="font-bold">Account Details</span>
            <p className="text-sm tracking-normal">
              Manage your personal details
            </p>
          </div>
          <div className="arrow">
            <IoIosArrowForward size={16} />
          </div>
        </div>
        <div className="menu-item" onClick={() => console.log("555")}>
          <div className="w-[55px] h-[55px] mr-[14px]">
            <IconProfile width="100%" height="100%" className="icon_account" />
          </div>
          <div>
            <span className="font-bold">Stock Notifications</span>
            <p className="text-sm tracking-normal">
              Manage your email notifications
            </p>
          </div>
          <div className="arrow">
            <IoIosArrowForward size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
