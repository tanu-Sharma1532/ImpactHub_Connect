import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GameLobby from "./pages/GameLobby";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <Router>
      <div>
        {/* ✅ Navbar */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>🎮 Game Lobby</Link>
          <Link to="/wallet" style={styles.link}>💰 Wallet</Link>
        </nav>

        {/* ✅ Page Routes */}
        <Routes>
          <Route path="/" element={<GameLobby />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "10px",
    background: "#f4f4f4",
    borderBottom: "1px solid #ddd"
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold"
  }
};

export default App;
