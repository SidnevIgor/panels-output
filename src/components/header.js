import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { MdShoppingCart, MdHome } from "react-icons/md";
import Badge from "react-bootstrap/Badge";

import { PanelsContext } from "../context/PanelsContext";

const Header = () => {
  const [panels, setPanels, panelsInCart, setPanelsInCart] =
    useContext(PanelsContext);

  return (
    <Nav className="bg-light" style={styles.navbarContainer}>
      <Link to={"/"}>
        <MdHome size={25} />
      </Link>
      <Link to={"/cart"}>
        <MdShoppingCart size={25} />
        <Badge pill bg="warning" text="dark" style={styles.badge}>
          {panelsInCart.length}
        </Badge>
      </Link>
    </Nav>
  );
};

const styles = {
  navbarContainer: {
    justifyContent: "space-between",
    padding: "1rem",
  },
  badge: {
    position: "absolute",
    marginLeft: "-1%",
    marginTop: "-0.5%",
  },
};

export default Header;
