import React from "react";
import useClock from "../hooks/useClock";

type Props = {
  label:string;
};

const Clock = ({label}: Props) => {
  let {Hours,Minutes,Seconds}=useClock();
  return (
    <div data-testid="clock">
      <h1 data-testid="clock-label">
        {label}
      </h1>
      <h1>

      <span data-testid="clock-hours">
        {Hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {Minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {Seconds}
        </span>
      </h1>
    </div>
  );
};

export default Clock;
