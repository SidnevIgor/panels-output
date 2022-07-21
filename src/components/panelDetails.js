import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { PanelsContext } from "../context/PanelsContext";

const PanelDetails = () => {
  let { panelId } = useParams();
  const [panels, setPanels] = useContext(PanelsContext);
  const panel = panels.find((item) => item.id == panelId);
  console.log("The panel is ", panel);

  return (
    <Container>
      {!!panel && (
        <>
          <h1>{panel.title}</h1>
          <h1>{panel.category}</h1>
          <h1>{panel.intro}</h1>
          <h1>{panel.details[0]}</h1>
        </>
      )}
    </Container>
  );
};

export default PanelDetails;
