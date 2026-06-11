import React from "react";

export default function Event() {
  const shoot = (x) => {
    alert(x);
  };
  const cot = (x) => {
    alert(x);
  };
  const today = "Friday";

  return (
    <>
      <h1>Event</h1>

      <button onClick={() => shoot("Great Shoot!")}>Shoot</button>
      <button onClick={() => cot("Out!!")}>Catch Up</button>

      <h1>Condittion</h1>
      {today == "Friday" ? "Holyday" : "Open"} <br /><br />
      {today == "Friday" && "Holyday" }
    </>
  );
}
