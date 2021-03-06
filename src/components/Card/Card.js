import React from "react";
import "./Card.css";
import CardB from "react-bootstrap/Card";

export default function Card({ image, title, text, alt }) {
  return (
    <div className="col col-lg-3 col-md-4 col-sm-6 col-12 my-auto mx-auto">
      <CardB style={{ width: "15rem" }}>
        {getImage(image, alt)}
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

function getImage(image, alt){
  let ret = image === undefined ? "": <CardB.Img variant="top" src={image} alt={alt}/>
  return(
    ret
  );
}
