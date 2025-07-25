
function GameBoard({ onSelectedCell, board }) {
    // const [gameState, setGameState] = useState(initialGameState);
  

    // function handleCellClick(rowIndex, cellIndex) {
    //     setGameState(prevState => {
    //         const newState = [...prevState.map(row => [...row])];
    //         newState[rowIndex][cellIndex] = activePlayerSymbom;
    //         return newState;
    //     });
    //     onSelectedCell(rowIndex, cellIndex);
    // }

    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={cellIndex}>
                                <button onClick={() => onSelectedCell(rowIndex, cellIndex)} disabled={cell !== null}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;