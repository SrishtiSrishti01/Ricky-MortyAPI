import React from "react";
import Styles from "./CharacterStyles.css";

function Character({ item }) {
  return (
    <div>
      {/* {console.log(item)} */}
      <div className="card">
        <div>
          <img src={item?.image} alt="" />
        </div>
        <div className="content">
          <h1>{item?.name}</h1>
          <p>
            {item?.status} - {item?.species}
          </p>
          <p className="location"> Last Known Location :- </p>
          <p>{item?.location.name}</p>
          {/* <p> First scene in :- </p> */}
          <br />
          <a href={item?.episode[0]}> First Scene Here </a>
        </div>
      </div>
    </div>
  );
}

export default Character;
