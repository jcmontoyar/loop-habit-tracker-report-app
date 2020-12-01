import React, { useState } from "react";
import "./Card.css";
import CardB from "react-bootstrap/Card";

export default function Card({ image, title, text }) {
  return (
    <div className="col col-md-4 col-sm-12">
      <CardB style={{ width: "15rem" }}>
        <CardB.Img variant="top" src={image} alt={title} />
        <CardB.Body>
          <div className="text-center">
            <CardB.Title>{title}</CardB.Title>
          </div>
          <CardB.Text>{text}</CardB.Text>
        </CardB.Body>
      </CardB>
    </div>
  );
}
