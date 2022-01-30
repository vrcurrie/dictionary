import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    let synonyms = props.synonyms;
    return (
      <ul className="Synonyms">
        {props[0]}
        {synonyms.map(function (synonyms, index) {
          return <li key={index}> {synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
