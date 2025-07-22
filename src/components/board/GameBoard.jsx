import { useState } from "react";

const initialGameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function GameBoard() {
    const [gameState, setGameState] = useState(initialGameState);

    function handleCellClick(rowIndex, cellIndex) {
        setGameState(prevState => {
            const newState = [...prevState.map(row => [...row])];
            newState[rowIndex][cellIndex] = 'X';
            return newState;
        });
    }

    return (
        <ol id='game-board'>
            {gameState.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={cellIndex}>
                                <button onClick={() => handleCellClick(rowIndex, cellIndex)}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;