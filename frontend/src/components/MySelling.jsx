import React, { useState } from "react";

import "../styles/MySelling.scss";
import { IoIosArrowBack } from "react-icons/io";

const values = [
  { id: 1, text: "Pending", value: 0 },
  { id: 2, text: "Active", value: 0 },
  { id: 3, text: "Completed", value: 0 },
  { id: 4, text: "Cancelled", value: 0 },
];

const MySelling = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="container">
      <div className="head">
        <div className="head-link">
          <IoIosArrowBack size={18} />
          Account
        </div>
        <div className="head-title">
          <h3>Your Sale Items</h3>
          <a href="#">SELL ITEMS</a>
        </div>
      </div>
      <div className="tabs">
        <ul>
          {values.map((val) => (
            <li onClick={() => setActiveId(val.id)}>
              <a href="#" className={activeId === val.id ? "active" : ""}>
                {val.text} ({val.value})
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="listings">
        <div className="list-item__search">Search</div>
      </div>
    </div>
  );
};

export default MySelling;
