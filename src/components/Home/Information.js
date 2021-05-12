import React, { useState } from "react";

function Information(props) {
  //const [info, setInfo] = useState("");
  const val = props.sendData;
  var text;
  if (val === "chess") {
    text =
      "Chess is a recreational and competitive board game played between two players. It is sometimes called Western or international chess ";
  } else if (val === "badminton") {
    text =
      "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. ... Points are scored by striking the shuttlecock with the racquet and landing it within the opposing sides half of the court.";
  } else if (val === "cricket") {
    text =
      "Cricket is played by two teams of 11, with one side taking a turn to bat a ball and score runs, while the other team will bowl and field the ball to restrict the opposition from scoring. The main objective in cricket is to score as many runs as possible against the opponent.";
  }
  return (
    <div>
      <p style={{ paddingTop: "20px" }}>{text}</p>
    </div>
  );
}

export default Information;
