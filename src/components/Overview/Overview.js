import React from "react";
import RatingCard from "../RatingCard/RatingCard";

const data = [
  {
    item: "Performance",
    score: 2,
    reason: "Profiler shows overall poor results regarding performance and for the functionalities that the app offers, the performance should not be that poor.",
  },
  {
    item: "Eventual connectivity",
    score: 4.5,
    reason: "The app has limited internet usage and works perfectly offline. The app could improve by integrating itself to services such as Firebase and Mongo DB with out to much effort.",
  },
  {
    item: "Caching",
    score: 4.5,
    reason: "SQLite offers a reliave local storage database for the app, and the use of shared preferences is appropiate when used. However the selection of caching data structures could be better.",
  },
  {
    item: "Multi - threading",
    score: 5,
    reason: "The implementation of Async tasks is appropiate and reduces the load in the main thread.",
  },
  {
    item: "Memory management",
    score: 4,
    reason: "The app does not consume to much memory, and the amount consumed keeps pretty much constant during the whole execution. However there are memory leaks that should be looked on.",
  },
  {
    item: "Micro - optimizations",
    score: 2.5,
    reason: "The app could use some tuning here, specialy regarding overdrawing, the amount of unused resources, use of primitives over objects, and the overuse of nested linear layouts.",
  },
  {
    item: "Security",
    score: 3,
    reason: "Habit tracker tries to follow good practices overall, but the existing Android's local storage security issues plus the fact that the activity that handles the habits is exported induces a concerning data security issue.   ",
  },
];

export default function Overview() {
  return (
    <div className="container">
      <h1 className="text-center">Overview</h1>
      <hr className="mt-0 mb-0 hrNav" />
      <hr />
        <div className="row">{data.map((item) => getScore(item))}</div>
        <hr />
    </div>
  );
}

function getScore(item) {
  return (
    <div className="col col-12 col-lg-4 col-md-6 col-sm-6 colorBorderRight my-auto mx-auto"  key={item.item}>
      <h2>{item.item}</h2>
      <RatingCard text={item.reason} score={item.score}></RatingCard>
    </div>
  );
}
