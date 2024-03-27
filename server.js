const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const cors = require('cors');

app.use(cors());
app.get('/persons', (req, res) => {
	const jsonFile = fs.readFileSync('./data/data.json')
	const data = JSON.parse(jsonFile);
	res.json(data)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
