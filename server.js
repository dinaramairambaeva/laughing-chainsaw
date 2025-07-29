// server.js
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Путь к Vite-сборке (в проде нужно будет билдить фронт)
app.use(express.static(path.resolve(__dirname, 'dist')))

// Все остальные маршруты отдаем index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`)
})
