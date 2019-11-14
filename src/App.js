import React from 'react';
import logo from './logo.svg';
import Team from './components/team/Team';
import Game from './components/game/Game';
import './App.css';


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: 'https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/raccoon.png'
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: 'https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/squirrel.png'
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: 'https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/bunny.png'
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: 'https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/hound.png'
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}


export default App;
