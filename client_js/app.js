import express from 'express'
const app = express()
import path from 'path'
const __dirname = path.resolve()


const port = 3001

app.get('/', (req, res) => {
    res.send('Hello from interface app!')
})

app.use('/sfu', express.static(path.join(__dirname, 'public')))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


