import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../Components/ContactCard.css";
import { deleteContact } from "../JS/Actions/contact";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cards">
      <Card style={{ width: "18rem " }}>
        <Card.Img
          variant="top"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        />
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>{contact.email}</Card.Text>
          <Card.Text>{contact.phone}</Card.Text>
        </Card.Body>
        <Button
          variant="primary"
          onClick={() => dispatch(deleteContact(contact._id))}
        >
          Delete
        </Button>
        <Button
          variant="primary"
          onClick={() => navigate(`/edit/${contact._id}`)}
        >
          Edit
        </Button>
      </Card>
    </div>
  );
};

export default ContactCard;
