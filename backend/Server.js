const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
    const { name, email } = req.body;
    console.log('Received data:', { name, email });
    res.status(200).json({ message: 'Data received successfully.' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
