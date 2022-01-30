import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  let definitions = props.meanings.definitions;
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      {definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definitions.definition}
              <br />
              <strong>Example:</strong>
              {definitions.example}
              <br />
              <strong>Synonyms:</strong>
              <Synonyms synonyms={definitions.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
