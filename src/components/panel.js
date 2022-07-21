import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Panel = ({ title, intro, id }) => {
  return (
    <Card style={styles.panelCard}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {intro} </Card.Text>
        <Link to={"/panel/" + id}>
          <Button style={styles.actionBtn} variant="secondary">
            See details
          </Button>
        </Link>
        <Button style={styles.actionBtn} variant="primary">
          Add to cart
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
