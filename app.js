const express = require('express')
const app = express()

app.use(express.json())

const path = require('path')
const dbPath = path.join(__dirname, 'cricketTeam.db')

const {open} = require('sqlite')

const sqlite3 = require('sqlite3')

let db = null

const intializeDB = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })

    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  } catch (e) {
    console.log(`error : ${e.message} `)
    process.exit(1)
  }
}
intializeDB()

app.get('/players/', async (request, response) => {
  const dbQuery = 'SELECT * FROM cricket_team;'

  const data = await db.all(dbQuery)
  response.send('sa')
})
