const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

app.use(express.static('public'));
app.get('/persons', (req, res) => {
	const jsonFile = fs.readFileSync('./data/data.json')
	const data = JSON.parse(jsonFile);
	res.json(data)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
