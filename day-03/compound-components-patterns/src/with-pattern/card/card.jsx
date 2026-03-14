import React from "react";

const Card = ({ children }) => {
  return <div>{children}</div>;
};

const Header = ({ children }) => {
  return <div>{children}</div>;
};

const Body = ({ children }) => {
  return <div>{children}</div>;
};

const Footer = ({ children }) => {
  return <div>{children}</div>;
};

const Image = ({ children }) => {
  return <div>{children}</div>;
};

// Attach subcomponents to the main Card component
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Image = Image;

export default Card;
