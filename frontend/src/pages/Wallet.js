import React, { useEffect, useState } from "react";
import axios from "axios";

const Wallet = () => {
  const userId = "123";
  const [wallet, setWallet] = useState(null);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const fetchWallet = () => {
    axios.get(`http://localhost:3000/wallet/${userId}`)
      .then(res => setWallet(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  const handleRecharge = () => {
    axios.post(`http://localhost:3000/wallet/recharge`, { userId, amount })
      .then(res => {
        setMessage(res.data.message);
        fetchWallet();
        setAmount("");
      })
      .catch(err => setMessage(err.response?.data?.message || "Recharge failed"));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>💰 Wallet</h2>
      {wallet && (
        <>
          <p>Total Coins: {wallet.coins}</p>
          <h4>Transaction History:</h4>
          <ul>
            {wallet.history.map((tx, index) => (
              <li key={index}>
                [{tx.type}] {tx.amount} - {tx.note} ({new Date(tx.timestamp).toLocaleString()})
              </li>
            ))}
          </ul>
        </>
      )}

      <h4>Recharge Wallet</h4>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleRecharge}>Recharge</button>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
};

export default Wallet;
