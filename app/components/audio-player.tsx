import React, { useEffect, useState } from 'react'
import ReactHowler from 'react-howler'
import audio from '~/audio/nofear.mp3';

export default function AudioPlayer() {
  const [ play, setPlay ] = useState(false)
  return (
    <div>
      <ReactHowler src={audio} playing={play} loop={true} html5={true}/>
      <button className='play-btn' onClick={() => setPlay(!play)}>
        { !play ? '▶' : '⏸' }
      </button>
    </div>
  )
}