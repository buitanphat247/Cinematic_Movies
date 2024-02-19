import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CircleWithRating = ({ rating }) => {
  return (
    <div className="w-[50px] h-[50px] font-bold bg-white rounded-full p-1 ">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          textSize: "25px",
          pathTransitionDuration: 0.5,
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleWithRating;
