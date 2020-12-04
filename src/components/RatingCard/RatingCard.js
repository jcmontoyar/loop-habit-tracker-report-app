import React from "react";
import CardB from "react-bootstrap/Card";

export default function RatingCard({ score, title, text }) {
  return (
    <CardB style={{ width: "23rem" }}>
      <CardB.Body>
        <div className="text-center">
          {getScore(score)}
          <CardB.Title className="cardRatingtitle">{title}</CardB.Title>
        </div>
        <CardB.Text>{text}</CardB.Text>
      </CardB.Body>
    </CardB>
  );
}

function getScore(score) {
  return (
    <span>
      {Array.from({ length: Math.floor(score) }, (_, j) => (
        <i key={"starCh" + j} className="fa fa-star checkedStar"></i>
      ))}
      {score - Math.floor(score) === 0 ? (
        ""
      ) : (
        <i className="fa fa-star-half-full checkedStar"></i>
      )}
      {Array.from({ length: Math.floor(5 - score) }, (_, j) => (
        <i key={"starUn" + j} className="fa fa-star starUnchecked"></i>
      ))}
    </span>
  );
}
