import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  let definitions = props.meanings.definitions;
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      {definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <div className="definition">{definitions.definition}</div>
            <br />
            <em className="definition">Example: {definitions.example}</em>

            <br />
            <strong>Synonyms:</strong>
            <br />
            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
