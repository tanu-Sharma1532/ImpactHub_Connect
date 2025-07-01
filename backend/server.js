const express = require('express');
const app = express();
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');
const walletRoutes = require('./routes/walletRoutes');

app.use(cors());
app.use(express.json());

app.use('/games', gameRoutes);
app.use('/wallet', walletRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
