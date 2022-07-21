import React, { useContext } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

import { PanelsContext } from "../context/PanelsContext";

const Cart = () => {
  const [panels, setPanels, panelsInCart, setPanelsInCart] =
    useContext(PanelsContext);

  const removePanelFromCart = (panelId) => {
    let panelsInCartCopy = [...panelsInCart];
    let updatedPanels = panelsInCartCopy.filter((panel) => panel.id != panelId);
    setPanelsInCart(updatedPanels);
  };

  return (
    <Container>
      <h1>Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Intro</th>
            <th></th>
          </tr>
        </thead>
        {panelsInCart.length ? (
          <tbody>
            {" "}
            {panelsInCart.map((panel, i) => (
              <tr key={"panel" + i}>
                <td>{i + 1}</td>
                <td>{panel.title}</td>
                <td>{panel.category}</td>
                <td>{panel.intro}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => removePanelFromCart(panel.id)}
                  >
                    <MdDeleteForever size={22} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colspan={5}>No items in cart...</td>
            </tr>
          </tbody>
        )}
      </Table>
    </Container>
  );
};

export default Cart;
