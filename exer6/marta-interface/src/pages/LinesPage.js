import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import TrainList from "../pages/TrainList";

export default function LinesPage() {
  const [currColor, setCurrColor] = useState("gold");
  const [stationData, setStationData] = useState(null);
  const [trainData, setTrainData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startingStation, setStartingStation] = useState("All Stations");
  const [trainDataLoading, setTrainDataLoading] = useState(true);

  const API_URL = "http://13.59.196.129:3001/";

  async function getStationData() {
    const data = await fetch(API_URL + `stations/${currColor}`);
    const newData = await data.json()
    setStationData(newData)
  }

  async function getTrainData() {
    new Promise(async () => {
      const data = await fetch(API_URL + `arrivals/${currColor}`);
      const newData = await data.json()
      setTrainData(newData);
      setTrainDataLoading(false);
    })
    setTrainDataLoading(true);
  }

  //On load, loading is set true then set false once data is received.
  //On line swtich, loading is set to true, set false once data os receoved/

  
useEffect(() => {
  getStationData();
  getTrainData();
  setLoading(false);
},[])

useEffect(() => {
  if (stationData !== null && trainData !== null) {
    setLoading(false);
  } else {
    setLoading(true);
  }
}, [stationData, trainData]);


useEffect(() => {
  getStationData();
  getTrainData();
},[currColor])

  return (
    <div className="lines-page-container">
      {loading ? <h1>loading........</h1> : <div>
      <ul className="lines-page-line-color-button-container">
        <li className="lines-page-line-color-button"><button className="train-item-line-GOLD" onClick={() => {
          setCurrColor("gold")
        }}>Gold</button></li>
        <li className="lines-page-line-color-button"><button className="train-item-line-RED" onClick={() => {
          setCurrColor("red")
        }}>Red</button></li>
        <li className="lines-page-line-color-button"><button className="train-item-line-BLUE" onClick={() => {
          setCurrColor("blue")
        }}>Blue</button></li>
        <li className="lines-page-line-color-button" ><button className="train-item-line-GREEN" onClick={() => {
          setCurrColor("green")
        }}>Green</button></li>
      </ul>
      <h1 className="header">{currColor?.toUpperCase()}</h1>
      <div className="lines-page-info-container">
        <NavBar color={currColor} data={stationData} start={startingStation} setStart={setStartingStation}/>
        <TrainList color={currColor} data={trainData} start={startingStation} loading={trainDataLoading}/>
      </div>
    </div>
}
</div>
  );
}