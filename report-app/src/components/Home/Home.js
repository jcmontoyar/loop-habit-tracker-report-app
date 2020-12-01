import React, { useState } from "react";
import pdfFile from "../../dev.pdf";
import Picture1 from "./Picture1.png";
import Download from "./download.png";
import Star from "./star.png";
import { Document, Page } from "react-pdf";
import Card from "../Card/Card.js";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function Home() {
  const [file, setFile] = useState(pdfFile);
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="container-fluid">
      <h1 className="text-center">Loop Habit tracker report</h1>
      <h2>
        This web page will show you an evaluation of the application Loop Habit
        tracker
      </h2>
      <img href={Picture1} />

      <div className="row justify-content-around">
        <Card image={Download} title={"1M downloads"} text=""></Card>

        <Card
          image={Star}
          title={"Rating of 4.5 with nearly 40K reviews "}
          text=""
        ></Card>

        <Card image={Star} title={"Current version"} text=""></Card>
      </div>

      <div>
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>{" "}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}

function getDownloadIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      class="bi bi-cloud-download"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
      />
      <path
        fill-rule="evenodd"
        d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
      />
    </svg>
  );
}
