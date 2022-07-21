import React, { useContext } from "react";
import Container from "react-bootstrap/Container";

import Panel from "./panel";
import { PanelsContext } from "../context/PanelsContext";

const Panels = () => {
  const [panels, setPanels] = useContext(PanelsContext);

  console.log("Panels are: ", panels);

  return (
    <Container style={styles.panelsContainer}>
      {panels &&
        panels.map((panel, i) => (
          <Panel
            title={panel.title}
            intro={panel.intro}
            id={panel.id}
            key={"panel" + i}
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
