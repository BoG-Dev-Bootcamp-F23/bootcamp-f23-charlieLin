import { useState } from "react";

export default function NavBar(props) {
  const { color, data, start, setStart } = props;

  return (
    <div className="navbar-container">
      <p className="navbar-header">Select your starting station</p>
      <ul className="navbar-ul">
        <li style={{cursor : "pointer"}} onClick={() => {
            setStart("All Stations")
          }}>All Stations</li>
        {data?.map((station) => {
          return <li style={{cursor : "pointer"}} key={station} onClick={() => {
            setStart(station)
          }}>{station}</li>;
        })}
      </ul>
    </div>
  );
}
