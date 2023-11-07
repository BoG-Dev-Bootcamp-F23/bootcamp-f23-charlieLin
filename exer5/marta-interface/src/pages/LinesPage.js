import stationData from "../server/stationData";
import trainData from "../server/trainData";
import { useState } from "react";
import NavBar from "../components/NavBar";
import TrainList from "../pages/TrainList";

export default function LinesPage() {
  const [currColor, setCurrColor] = useState("green");

  return (
    <div className="lines-page-container">
      <h1 className="header">{currColor.toUpperCase()}</h1>
      <div className="lines-page-info-container">
        <NavBar color={currColor} data={stationData} />
        <TrainList color={currColor} data={trainData} />
      </div>
    </div>
  );
}
