import React, { useState } from "react";

// Pdf
import file from "./App Report Habit Tracker.pdf";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
// Plugins pdf
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Card
import Card from "../Card/Card.js";

// Carousel
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
  Dots,
} from "@brainhubeu/react-carousel";

//css
import "@brainhubeu/react-carousel/lib/style.css";
import "./Home.css";

// Images
import Habits from "./habits.webp";
import OverviewImg from "./overviewImg.webp";
import WidgetsImg from "./widgets.webp";
import Download from "./download.png";
import Star from "./star.png";
import Unlocked from "./unlocked.png";
import Android from "./Android.svg";
import Commit from "./commit.svg";
import Developer from "./developer.png";
import GitHub from "./github.png";

// Dictionary of functionalities
const functionalities = [
  {
    image: Habits,
    alt: "Screenshot of add habits functionality",
    description: "Add your habits to the app",
  },
  {
    image: OverviewImg,
    alt: "Screenshot of overview of habits functionality",
    description: "Maintain and keep track of each habit",
  },
  {
    image: WidgetsImg,
    alt: "Screenshot of the widgets built in the app",
    description: "Built in Android widgets",
  },
];

// Dictonary of cards
const overviewChar = [
  {
    image: Download,
    alt: "Download image",
    description: "Over 1M Downloads",
  },
  {
    image: Star,
    alt: "Image of a star",
    description: "Rating of 4.5 with nearly 40K reviews",
  },
  {
    image: Unlocked,
    alt: "Icon of an unlocked lock",
    description: <a>Open source code</a>,
  },
  {
    image: Android,
    alt: "Image of the android icon",
    description: "Current version: 1.8.8",
  },
];

// Dictonary of cards for the overview repo
const overviewRepository = [
  {
    image: GitHub,
    alt: "Github icon",
    description: "Hosted in GitHub",
  },
  {
    image: Commit,
    alt: "Icon of a git Commit",
    description: "Over 1.5K commits",
  },
  {
    image: Developer,
    alt: "Image of a developer",
    description: "37 Contributors",
  },
];

export default function Home() {
  // State of carousell
  const [value, setValue] = useState(0);

  // Change status
  const onChange = (value) => {
    setValue(value);
  };

  // Create new pdf plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="container-fluid">
      <h1 className="text-center">Loop Habit Tracker Report</h1>
      <div className="row">
        <div className="col col-4 my-auto">
          <h2>
            Habit tracker helps you build a very detailed trace of the habits
            you do in your everyday life with a beatiful and minimalistic UI
          </h2>
        </div>
        <div className="col col-8 my-auto">
          <div className="row">
            <div className="col col-12">
              <Carousel
                value={value}
                onChange={onChange}
                plugins={[
                  "centered",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 3,
                    },
                  },
                  {
                    resolve: arrowsPlugin,
                    options: {
                      arrowLeft: (
                        <button className="btnFlecha">
                          <i className="fa fa-angle-left styleFlecha"></i>
                        </button>
                      ),
                      arrowLeftDisabled: (
                        <button className="btnFlecha">
                          <i className="fa fa-angle-left styleFlechaDisabled"></i>
                        </button>
                      ),
                      arrowRight: (
                        <button className="btnFlecha">
                          {" "}
                          <i className="fa fa-angle-right styleFlecha"></i>
                        </button>
                      ),
                      arrowRightDisabled: (
                        <button className="btnFlecha">
                          {" "}
                          <i className="fa fa-angle-right styleFlechaDisabled"></i>
                        </button>
                      ),
                      addArrowClickHandler: true,
                    },
                  },
                ]}
              >
                {functionalities.map((func) => (
                  <img
                    src={func.image}
                    alt={func.alt}
                    width="300px"
                    height="550px"
                    key={"image" + func.alt}
                  />
                ))}
              </Carousel>
              <Dots
                value={value}
                onChange={onchange}
                number={functionalities.length}
              />
            </div>
            <div className="col col-12">
              <h3 className="text-center">
                {functionalities[value].description}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <h2 className="title text-center">App Overview</h2>

      <div className="container">
        <div className="row justify-content-center">
          {overviewChar.map((char) => (
            <Card
              image={char.image}
              title={char.description}
              text=""
              alt={char.alt}
              key={"card" + char.image}
            ></Card>
          ))}
        </div>
      </div>
      <hr />
      <h2 className="title text-center">Repository overview</h2>

      <div className="container">
        <div className="row justify-content-center">
          {overviewRepository.map((char) => (
            <Card
              image={char.image}
              title={char.description}
              text=""
              alt={char.alt}
              key={"card" + char.image}
            ></Card>
          ))}
        </div>
      </div>
      <hr />
      <h2 className="title text-center">Check the PDF version of the report!</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className= "pdfContainer"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "850px",
              width: "800px"
            }}
          >
            <Viewer
              fileUrl={file}
              plugins={[
                // Register plugins
                defaultLayoutPluginInstance,
              ]}
            />
          </div>
        </div>
      </div>
      <a target="_blank"  href="https://drive.google.com/file/d/1UWNXTb2cO7N3jcxCVCtsE_RVRrS61ziL/view?usp=sharing">Click here if the PDF does not show up</a>
    </div>
  );
}
