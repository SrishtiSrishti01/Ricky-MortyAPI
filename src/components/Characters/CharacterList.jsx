import React from "react";
import Character from "./Character";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Styles from "./CharacterStyles.css";

function CharacterList() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    let res = await axios.get("https://rickandmortyapi.com/api/character");
    setChar(res.data.results);
  };
  return (
    <>
      <ul className="list">
        {char.map((item) => (
          <li key={item.id}>
            {" "}
            <Character item={item} />{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CharacterList;
