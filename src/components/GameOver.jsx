export default function GameOver({ onRestartButtonClick, players, ...props }) {
    return (
        <div  {...props} id='game-over'>
            <h2>Game Over</h2>
            <h2>Player {players['X']} vs Player {players['O']}</h2>
            <h2>Thanks for playing!</h2>
            <button className='restart-button' onClick={onRestartButtonClick}>Restart</button>
        </div>
    );
}