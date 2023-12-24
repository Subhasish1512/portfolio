import React from "react";
import Card from "react-bootstrap/Card";

function Contactcards(props) {
  return (
    <Card className="project-card-view">
      
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {"\n"}
        <Card.Text style={{ textAlign: "align" }}>
          <a href="{props.href}">
          {props.description}
          </a>
        </Card.Text>
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default Contactcards;
