import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/profile">My Profile</Link></li> */}
          {/* <li><Link to="/search">Search</Link></li>     if we have time I will add these links */}
          <li>
            <span>Categories</span>
            <ul>
              <li></li>
              <li><Link to="">Action</Link></li>
              <li><Link to="">Romance</Link></li>
              <li><Link to="">Family Friendly</Link></li>
              <li><Link to="">Thriller</Link></li>
              <li><Link to="">Sci-Fi</Link></li>
              <li>
                <div className="login-link">
                  <p>Want to become a noodle watcher? <Link to="/login">Click here to log in</Link></p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
