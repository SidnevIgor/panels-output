import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav className="bg-light" style={styles.navbarContainer}>
      <Link to={"/"}>
        <h5>Panels</h5>
      </Link>
      <Link to={"/cart"}>
        <h5>Cart</h5>
      </Link>
    </Nav>
  );
};

const styles = {
  navbarContainer: {
    justifyContent: "space-between",
  },
};

export default Header;
