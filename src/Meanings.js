import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              {definitions.definition}
              <br />
              {definitions.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}
