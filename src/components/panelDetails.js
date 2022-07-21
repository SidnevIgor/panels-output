import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import { PanelsContext } from "../context/PanelsContext";

const PanelDetails = () => {
  let { panelId } = useParams();
  const [panels, setPanels] = useContext(PanelsContext);
  const panel = panels.find((item) => item.id == panelId);

  return (
    <Container fluid>
      <Row style={{ height: "10rem" }}>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={9} style={styles.panelDetails}>
          {!!panel && (
            <>
              <h1>{panel.title}</h1>
              <h6>{"#" + panel.category}</h6>
              <h5>{panel.intro}</h5>
              {panel.details.map((detail, i) => {
                return (
                  <Badge
                    pill
                    bg="warning"
                    text="dark"
                    style={styles.panelPill}
                    key={"detail" + i}
                  >
                    {detail}
                  </Badge>
                );
              })}
            </>
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

const styles = {
  panelDetails: {
    boxShadow: "3.3px 6.6px 6.6px hsl(0deg 0% 0% / 0.40)",
    borderRadius: "20px",
    padding: "1rem",
  },
  panelPill: {
    margin: "0.3rem",
  },
};

export default PanelDetails;
