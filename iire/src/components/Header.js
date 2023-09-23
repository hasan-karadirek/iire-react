import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        alt="logo"
        src="http://oralinestore.com/wp-content/uploads/2021/11/IIRE-Logo2021_black-1.png"
      />
      <a href="#"> Meeting Rooms</a>
      <ul className="dropdown-menu-list">
        <li>
          <span>
            Our Services <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </span>
        </li>
        <div className="dropdown-items">
          <a href="#">Workspace</a>

          <a href="#">Accommodation</a>

          <a href="#">Kitchen</a>
        </div>
      </ul>
      <a href="#"> Contact</a>
    </div>
  );
}
