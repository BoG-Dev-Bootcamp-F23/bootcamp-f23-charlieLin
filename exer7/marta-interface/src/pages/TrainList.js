import Train from "../components/Train";
import { useState, useEffect } from "react";

export default function TrainList(props) {
  const { color, data, start, loading } = props;
  const [filteredData, setFilteredData] = useState([]);
  const [selected, setSelected] = useState({"Arriving": true, "Scheduled": true, "Eastbound": true, "Westbound": true, "Northbound": true,
"Southbound": true});
  const [ns, setNs] = useState(false);
  
  const resetSelected = () => {
    setSelected({"Arriving": true, "Scheduled": true, "Eastbound": true, "Westbound": true, "Northbound": true,
    "Southbound": true});
  }

  const filterSelected = (filtered) => {
    if (!selected["Arriving"]) {
      filtered = filtered.filter((x) => {
        return x.WAITING_TIME !== "Arriving";
      })
    }
    if (!selected["Scheduled"]) {
      filtered = filtered.filter((x) => {
        return x.WAITING_TIME == "Arriving";
      })
    }
    if (!selected["Eastbound"]) {
      filtered = filtered.filter((x) => {
        return x.DIRECTION !== "E";
      })
    }
    if (!selected["Westbound"]) {
      filtered = filtered.filter((x) => {
        return x.DIRECTION !== "W";
      })
    }
    if (!selected["Northbound"]) {
      filtered = filtered.filter((x) => {
        return x.DIRECTION !== "N";
      })
    }
    if (!selected["Southbound"]) {
      filtered = filtered.filter((x) => {
        return x.DIRECTION !== "S";
      })
    }
    return filtered;
  }

  useEffect(() => {
    setNs(color === "gold" || color === "red")
  }, [color])

  useEffect(() => {
    const filtered = data?.filter((x) => {
      if (start === "All Stations") {
        return x.LINE === color.toUpperCase()
      } else {
        return x.LINE === color.toUpperCase() && x.STATION.includes(start.toUpperCase())
      }
    });
    setFilteredData(filterSelected(filtered))
  }, [start, data, selected]);

  useEffect(() => {
    resetSelected();
  }, [color])

  const handleButtonClick = (name) => {
    const prevSelected = JSON.parse(JSON.stringify(selected));
    prevSelected[name] = !prevSelected[name]
    setSelected(prevSelected);
  };

  return (
    <div>
      <div className="line-button-container">
        <button
          className={`line-button ${selected["Arriving"] && "active-button"}`}
          onClick={() => {
            handleButtonClick("Arriving");
          }}
        >
          Arriving
        </button>
        <button
          className={`line-button ${selected["Scheduled"] && "active-button"}`}
          onClick={() => {
            handleButtonClick("Scheduled");
          }}
        >
          Scheduled
        </button>
        <button
          className={`line-button ${selected[ns ? "Northbound" : "Eastbound"] && "active-button"}`}
          onClick={() => {
            handleButtonClick(ns ? "Northbound" : "Eastbound");
          }}
        >
          {ns
            ? "Northbound"
            : "Eastbound"}
        </button>
        <button
          className={`line-button ${selected[ns ? "Southbound" : "Westbound"] && "active-button"}`}
          onClick={() => {
            handleButtonClick(ns
            ? "Southbound"
            : "Westbound");
          }}
        >
          {ns
            ? "Southbound"
            : "Westbound"}
        </button>
      </div>
      {filteredData?.map((x) => {
        return <Train {...x} key={JSON.stringify(x)} />;
      })}
      {loading? <h1>Loading</h1> : <p></p>}
      {!loading && filteredData.length == 0 ? <h1>No trains available.</h1> : <></>}
    </div>
  );
}
