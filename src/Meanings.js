import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <div className="definition">{definitions.definition}</div>
            <br />
            <em className="definition">{definitions.example}</em>
            <br />
            <strong>
              <Synonyms synonyms={definitions.synonyms} />
            </strong>
          </div>
        );
      })}
    </div>
  );
}
