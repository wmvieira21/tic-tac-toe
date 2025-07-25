export default function GameOver({ onRestartButtonClick, ...props }) {
    return (
        <div  {...props} id='game-over'>
            <h2>Game Over</h2>
            <button className='restart-button' onClick={onRestartButtonClick}>Restart</button>
        </div>
    );
}