const initialGameState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function GameBoard() {
    return (
        <ol id='game-board'>
            {initialGameState.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={cellIndex}>
                                <button>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;