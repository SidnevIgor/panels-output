import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Panel = ({ title, intro }) => {
  return (
    <Card style={styles.panelCard}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {intro} </Card.Text>
        <Button style={styles.actionBtn} variant="secondary">
          See details
        </Button>
        <Button style={styles.actionBtn} variant="primary">
          Add to basket
        </Button>
      </Card.Body>
    </Card>
  );
};

const styles = {
  panelCard: {
    display: "inline-block",
    width: "18rem",
    margin: "0.5rem",
  },
  actionBtn: {
    margin: "0.1rem",
  },
};

export default Panel;
