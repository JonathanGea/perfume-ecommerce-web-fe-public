const express = require('express');
const path = require('path');
const compression = require('compression');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

// Gunakan kompresi
app.use(compression());

// Fungsi untuk menemukan path index.html
function findIndexHtml() {
  // Coba beberapa kemungkinan path
  const possiblePaths = [
    '/app/public/index.html',
    '/app/dist/index.html',
    // Gunakan find untuk mencari di seluruh direktori
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      console.log(`Found index.html at: ${filePath}`);
      return filePath;
    }
  }

  // Gunakan find command untuk mencari file
  try {
    const foundFiles = require('child_process').execSync('find /app -name "index.html"', { encoding: 'utf8' });
    const files = foundFiles.split('\n').filter(Boolean);
    if (files.length > 0) {
      console.log(`Found index.html using find: ${files[0]}`);
      return files[0];
    }
  } catch (e) {
    console.error('Error finding index.html:', e);
  }

  return null;
}

// Temukan file index.html
const indexHtml = findIndexHtml();
let publicPath = '/app/public';

if (indexHtml) {
  publicPath = path.dirname(indexHtml);
  console.log(`Using public path: ${publicPath}`);
} else {
  console.error('Could not find index.html file. Attempting to use default path.');
}

// Serve static files
app.use(express.static(publicPath));

// Healthcheck untuk Railway
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Log semua file di direktori public saat server berjalan
console.log('Files in public directory:');
try {
  const files = fs.readdirSync(publicPath);
  console.log(files);
} catch (e) {
  console.error(`Error reading directory ${publicPath}:`, e);
}

// Semua request lainnya ke Angular app
app.get('*', (req, res) => {
  if (indexHtml) {
    res.sendFile(indexHtml);
  } else {
    res.status(404).send('Cannot find index.html');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});