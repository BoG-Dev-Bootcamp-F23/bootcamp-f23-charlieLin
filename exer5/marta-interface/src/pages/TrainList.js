import Train from "../components/Train";
import { useState } from "react";

export default function TrainList(props) {
  const { color, data } = props;

  const filteredData = data.RailArrivals.filter((x) => {
    return x.LINE === color.toUpperCase();
  });

  const [lineColor, setLineColor] = useState(color);

  const [active, setActive] = useState(0);

  const handleButtonClick = (index) => {
    setActive(index);
  };

  return (
    <div>
      <div className="line-button-container">
        <button
          className={`line-button ${active === 0 && "active-button"}`}
          onClick={() => {
            handleButtonClick(0);
          }}
        >
          Arriving
        </button>
        <button
          className={`line-button ${active === 1 && "active-button"}`}
          onClick={() => {
            handleButtonClick(1);
          }}
        >
          Scheduled
        </button>
        <button
          className={`line-button ${active === 2 && "active-button"}`}
          onClick={() => {
            handleButtonClick(2);
          }}
        >
          {lineColor === "gold" || lineColor === "red"
            ? "Northbound"
            : "Eastbound"}
        </button>
        <button
          className={`line-button ${active === 3 && "active-button"}`}
          onClick={() => {
            handleButtonClick(3);
          }}
        >
          {lineColor === "gold" || lineColor === "red"
            ? "Southbound"
            : "Westbound"}
        </button>
      </div>
      {filteredData.map((x) => {
        return <Train {...x} />;
      })}
    </div>
  );
}
