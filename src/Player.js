import React from 'react';
import './Player.css'
import "bootstrap/dist/css/bootstrap.css";

import './BlenderPro-Medium.ttf';

const Player = ({ player }) => {
    return (
      <div className="player col-sm-4 p-4">
        
        <img src={player.avatar}  />
        <p className='a display-4 ' >{player.name}</p>
      </div>
    );
  };
  
export default Player;
