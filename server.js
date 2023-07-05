// server.js
const express = require("express")
const connectDB = require("./config/dbConfig")
const userRoutes = require("./routes/userRoutes")

const app = express()
const PORT = 3000

// Middleware pour parser les données JSON
app.use(express.json())

// Connecter à la base de données MongoDB
connectDB()

// Routes
app.use("/", userRoutes)

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
