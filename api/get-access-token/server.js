const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/api/get-access-token', async (req, res) => {
  try {
    // const apiKey = process.env.HEYGEN_API_KEY; // Store your API key in an environment variable
    apiKey = "OWY2NmI3MzZmOWI0NGVjYjk3MGM2NGIyNGRmYmE4YjktMTY5NDc3MTgzNw=="
    const response = await fetch('https://api.heygen.com/v1/streaming.create_token', {
      method: 'POST',
      headers: { 'x-api-key': apiKey },
    });

    const { data } = await response.json();
    res.json({ token: data.token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch access token' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
