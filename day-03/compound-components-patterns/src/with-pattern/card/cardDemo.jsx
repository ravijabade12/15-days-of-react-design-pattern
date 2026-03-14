import React from "react";
import Card from "./card";

const CardDemo = () => {
  return (
    <Card>
      <Card.Header>
        <h2>Card Title</h2>
      </Card.Header>
      <Card.Image>
        <img
          src="https://picsum.photos/200/300"
          alt="Card Image"
          className="w-full h-auto"
        />
      </Card.Image>
      <Card.Body>
        <p>
          This is the body of the card. It can contain any content you like.
        </p>
      </Card.Body>
      <Card.Footer>
        <button>Action 1</button>
        <button>Action 2</button>
      </Card.Footer>
    </Card>
  );
};

export default CardDemo;
