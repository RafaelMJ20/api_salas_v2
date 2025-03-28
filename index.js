// index.js (Microservicio de Salas)
const express = require("express");
const http = require("http");
const { Server } = require("ws");
const cors = require("cors");
const { connectDB } = require("./data/config");
const SalaRoutes = require("./routes/SalaRoutes");

const PORT = 3001;

// Crear la instancia de Express y el servidor HTTP
const app = express();
const server = http.createServer(app);

// Inicializar WebSockets
const wss = new Server({ server });

connectDB();

app.use(cors());
app.use(express.json());

// Rutas HTTP
app.use("/", SalaRoutes);

// Función para enviar un mensaje a todos los clientes conectados
function broadcastMessage(message) {
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(JSON.stringify(message)); // Enviar el mensaje a todos
      }
    });
  }
  
  wss.on("connection", (ws) => {
    console.log("🔌 Cliente conectado al WebSocket");
  
    // Escuchar mensajes del cliente
    ws.on("message", (message) => {
      const messageString = message.toString();
  
      try {
        const parsedMessage = JSON.parse(messageString);
        console.log("📨 Mensaje recibido:", parsedMessage);
  
        // Reenviar el mensaje a todos los clientes conectados
        broadcastMessage({
          roomId: parsedMessage.roomId,
          sender: parsedMessage.sender, // Aquí pasamos el username
          text: parsedMessage.text,
          timestamp: new Date().toISOString(),
        });
      } catch (error) {
        console.error("❌ Error al parsear el mensaje:", error);
      }
    });
  
    ws.on("close", () => console.log("❌ Cliente desconectado"));
  });

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`🚀 Microservicio de Salas corriendo en http://localhost:${PORT}`);
});
