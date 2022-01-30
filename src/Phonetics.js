import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <h6>/{props.phonetics.text}/</h6>
      <div className="audio-player">
        <ReactAudioPlayer src={props.phonetics.audio} controls />
      </div>
    </div>
  );
}
