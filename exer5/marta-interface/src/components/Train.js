export default function Train(props) {
  const destination = props.DESTINATION + " Station";
  const ogStation = props.STATION;
  const onTime = props.DELAY === "T0S" ? "On Time" : "Delayed";
  const currColor = props.LINE;
  const waitingTime = props.WAITING_TIME;
  const trainStatus =
    onTime === "Delayed" ? "train-item-delayed" : "train-item-on-time";

  return (
    <div className="train-item-container">
      <h1 className="train-item-logo">{ogStation.charAt(0).toUpperCase()}</h1>
      <div className="train-item-station-description">
        <p className="train-item-og-destination">
          {normalCaseHelper(ogStation)} &rarr; {normalCaseHelper(destination)}
        </p>
        <div className="train-item-line-delay">
          <p className={`train-item-line-${currColor}`}>
            {currColor.charAt(0) + currColor.slice(1).toLowerCase()}
          </p>
          <p className={trainStatus}>{onTime}</p>
        </div>
      </div>
      <div className={`train-item-arrival-time ${trainStatus}`}>
        {waitingTime !== "Arriving" && <p>{waitingTime.charAt(0)}</p>}
        {waitingTime === "Arriving" ? (
          <p>{waitingTime}</p>
        ) : (
          <p>{waitingTime.slice(2)}</p>
        )}
      </div>
    </div>
  );
}

// dOg -> Dog, CAT -> Cat, alpacA fUr -> Alpaca Fur
const normalCaseHelper = (string) => {
  const stringList = string.split(" ");
  const result = stringList.map((word, index) => {
    if (index === stringList.length - 1) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  return result.join(" ");
};
