import './BlenderPro-Medium.ttf';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Player from './Player';
import tenz from './tenz.jpg';
import pancada from './pancada.jpg';
import john from './johnqt.jpg';
import zekken from './zekken.jpg';
import sacy from './sacy.jpg';
import zel from './zellsis.jpg';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let players = [
    { id: 1, name: "TenZ", avatar: tenz },
    { id: 2, name: "Pancada", avatar: pancada },
    { id: 3, name: "JohnQT", avatar: john },
    { id: 4, name: "Zekken", avatar: zekken },
    { id: 5, name: "Sacy", avatar: sacy },
    { id: 6, name: "Zellsis", avatar: zel },
  ];

  return (
    <div className="page">
      <Header />
      <div className="background-image">
        <div className='container-fluid'>
          {players.map((e) => (
            <Player key={e.id} player={e} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
