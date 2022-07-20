import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Panel from "./panel";
import { PanelsContext } from "../context/PanelsContext";

const Panels = () => {
  const [panels, setPanels] = useContext(PanelsContext);

  console.log("Panels are: ", panels);

  return (
    <Container style={styles.panelsWrapper}>
      <Container style={styles.panelsContainer}>
        {panels &&
          panels.map((panel, i) => (
            <Panel title={panel.title} intro={panel.intro} key={"panel" + i} />
          ))}
      </Container>
    </Container>
  );
};

const styles = {
  panelsWrapper: {
    borderColor: "black",
    borderWidth: "1%",
    borderStyle: "solid",
  },
  panelsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    borderColor: "red",
    borderWidth: "1%",
    borderStyle: "solid",
    padding: 0,
  },
};

export default Panels;
