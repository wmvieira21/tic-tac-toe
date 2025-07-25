import './Player.css';
import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing);
        
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span>
                {isEditing ?
                    <input id='player-id' type="text" className='player-name' value={playerName} required onChange={handleNameChange} /> :
                    <span className='player-name'>{playerName}</span>
                }

                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
        </li >
    );
}