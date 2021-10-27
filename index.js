const express = require('express')
const app = express()
const port = 4000

const models= require("./models");

app.get('/', async (req, res) => {
  res.json(await models.User.findAll({
    offset: 0,
    limit: 21
  }))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})