const express = require('express');
const path = require('path');
const app = express();

// Serve static files dari folder `dist/`
app.use(express.static(path.join(__dirname, 'dist/fe-public')));

// Handle semua rute dengan mengirim `index.html`
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/fe-public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});