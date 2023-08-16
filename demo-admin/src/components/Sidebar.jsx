import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to='/admin/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/admin/users'>Users</Link>
        </li>
        <li>
          <Link to='/admin/products'>Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
