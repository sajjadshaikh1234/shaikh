    import React from "react";
    import { Link, NavLink } from "react-router-dom";

    const Navbar = () => {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React User</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            {/* <li><hr className="dropdown-divider"></li> */}
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>  */}
      </ul>
      <Link className="btn btn-outline-light" exact to="/addusers">AddUser</Link >
    </div>
   
  </div>
  </div>
</nav>
        )
    }
export default Navbar