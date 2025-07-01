import React, { useEffect, useState } from "react";
import axios from "axios";

const GameLobby = () => {
  const [games, setGames] = useState([]);
  const [message, setMessage] = useState("");
  const userId = "123"; // Static for now

  useEffect(() => {
    axios.get("http://localhost:3000/games")
      .then((res) => setGames(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleJoin = (gameId) => {
    axios.post("http://localhost:3000/games/join", { userId, gameId })
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage(err.response?.data?.message || "Error joining game"));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🎮 Game Lobby</h2>
      {games.map((game) => (
        <div key={game.id} style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
          <h3>{game.name}</h3>
          <p>Entry Fee: {game.entryFee} coins</p>
          <p>Current Players Count: {game.players}</p>
          <button onClick={() => handleJoin(game.id)}>Join</button>
        </div>
      ))}
      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
};

export default GameLobby;
