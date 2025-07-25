import './App.css';
import { useState } from 'react';
import GameBoard from './components/board/GameBoard';
import Player from './components/player/Player';
import Log from './components/log/Log';
import GameOver from './components/GameOver';

function deriveCurrentPlayer(gameTurns) {
  let player = 'X';

  if (gameTurns.length > 0) {
    player = gameTurns[0].player === 'X' ? 'O' : 'X';
  }
  return player;
}

const initialGameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  //const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveCurrentPlayer(gameTurns);

  const [players, setPlayers] = useState(
    {
      'X': 'Player 1',
      'O': 'PLayer 2'
    },
  );

  const gameBoard = [...initialGameState.map(row => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    gameBoard[square.rowIndex][square.cellIndex] = player;
  }

  function handlePlayerChange(rowIndex, cellIndex) {
    //setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      const player = deriveCurrentPlayer(prevTurns);

      const updatedBoard = [
        { square: { rowIndex: rowIndex, cellIndex: cellIndex }, player: player },
        ...prevTurns]
      return updatedBoard;
    });
  }

  function handleRestartButtonClick() {
    setGameTurns((prevTurns) => []);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [playerSymbol]: newName
      };
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlighted'>
          <Player initialName='Player 1' symbol='X' isActive={currentPlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName='Player 2' symbol='O' isActive={currentPlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>
        <GameBoard onSelectedCell={handlePlayerChange} board={gameBoard} />
        {gameTurns.length >= 9 ? <GameOver className='game-over-backdrop' players={players} onRestartButtonClick={() => handleRestartButtonClick()} /> : null}
      </div>
      <Log entries={gameTurns} />
    </main>
  );
}

export default App;
