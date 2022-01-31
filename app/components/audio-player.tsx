import React, { useState } from "react";
import ReactHowler from "react-howler";
import audio from "~/audio/nofear.mp3";

export default function AudioPlayer() {
  const [playing, setPlaying] = useState<boolean>(false);

  return (
    <div>
      <ReactHowler src={audio} playing={playing} loop html5 />
      <button
        className="play-btn"
        onClick={() => setPlaying((prevState) => !prevState)}
      >
        {!playing ? "▶" : "⏸"}
      </button>
    </div>
  );
}
