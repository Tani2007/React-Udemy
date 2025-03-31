import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("unknown entity");
  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = " ";
  }
  return (
    <section id="player">
      <h1>Timer Game</h1>
      <h2>Wecome {enteredPlayerName || "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
