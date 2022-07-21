import React, { useContext } from "react";
import Container from "react-bootstrap/Container";

import Panel from "./panel";
import { PanelsContext } from "../context/PanelsContext";

const Panels = () => {
  const [panels, setPanels, panelsInCart, setPanelsInCart] =
    useContext(PanelsContext);

  const addPanelToCart = (panelId) => {
    if (panelsInCart.findIndex((item) => item.id == panelId) !== -1) return;

    let panel = panels.find((item) => item.id == panelId);
    let updatedPanelsInCart = [...panelsInCart];
    updatedPanelsInCart.push(panel);
    setPanelsInCart(updatedPanelsInCart);
  };

  return (
    <Container style={styles.panelsContainer}>
      {panels &&
        panels.map((panel, i) => (
          <Panel
            title={panel.title}
            intro={panel.intro}
            id={panel.id}
            key={"panel" + i}
            addPanelToCart={addPanelToCart}
          />
        ))}
    </Container>
  );
};

const styles = {
  panelsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 0,
  },
};

export default Panels;
