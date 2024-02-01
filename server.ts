import express from "express"

const app = express()
// app.get('/', (req, res) => {
//     console.log('hello world')
//     res.end('hi girls!')
// })
app.use(express.static("public"))
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})