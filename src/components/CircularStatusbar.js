import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CircularStatusbar = ({
  percentage,
  color = "red",
  trailColor = "red",
}) => {
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: color,
          trailColor: trailColor,
        })}
      />
    </div>
  );
};
