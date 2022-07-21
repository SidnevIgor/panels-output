import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Panel = ({ title, intro, id, addPanelToCart }) => {
  return (
    <Card style={styles.panelCard}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {intro} </Card.Text>
      </Card.Body>
      <Card.Footer style={styles.panelFooter}>
        <Link to={"/panel/" + id} className="align-self-end">
          <Button style={styles.actionBtn} variant="secondary">
            See details
          </Button>
        </Link>
        <Button
          style={styles.actionBtn}
          variant="primary"
          onClick={() => addPanelToCart(id)}
          className="mt-auto"
        >
          Add to cart
        </Button>
      </Card.Footer>
    </Card>
  );
};

const styles = {
  panelCard: {
    width: "18rem",
    margin: "0.5rem",
    minHeight: "12rem",
  },
  actionBtn: {
    margin: "0.1rem",
  },
  panelFooter: {
    position: "sticky",
    bottom: 0,
  },
};

export default Panel;
