import './Player.css';
import { useState } from "react";

export default function Player({ initialName, symbol }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing);
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
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