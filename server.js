import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import Metadata from './api/metadata.extractor.js'

dotenv.config()
const port = process.env.PORT || 8000
const app = express()

const upload = multer()

app.use(cors({defaultSuccessStatus: 200}))
app.use(express.static("./public/"))
app.get("/", (req, res, next) => {
    res.sendFile(process.cwd() + '/views/index.html')
})
app.post("/api/fileanalyse", upload.single("upfile"), (req, res, next) => {
    const metadataRes = Metadata.extract(req.file)
    res.json(metadataRes)
})

var listener = app.listen(port, () => {
    console.log(`Listening on port: ${listener.address().port}`)
})
