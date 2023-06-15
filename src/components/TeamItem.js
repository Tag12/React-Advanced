
import React from "react";

function TeamItem({ image, name, role }) {
  return (
    <div className="teamItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {role} </p>
    </div>
  );
}

export default TeamItem;
