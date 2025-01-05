import { useState } from "react";

export default function Player({ inetialName, symbol, isAcitve }) {
  const [playerName, setPlayerName] = useState(inetialName);
  const [isEditing, setIsEditing] = useState("");
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isAcitve ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
<input type="text" />;
