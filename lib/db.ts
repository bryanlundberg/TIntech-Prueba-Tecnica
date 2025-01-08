import { config } from "@/config/config";
import mongoose from "mongoose";

let isConnected = 0; // Estado de la conexión (0: desconectado, 1: conectado)

export async function connectDB(): Promise<void> {
  if (!config.MONGODB_URI) {
    throw new Error(
      "MONGODB_URI no está definida en las variables de entorno."
    );
  }

  if (isConnected) {
    console.log("Ya conectado a MongoDB.");
    return;
  }

  try {
    const db = await mongoose.connect(config.MONGODB_URI);

    isConnected = db.connections[0].readyState;
    console.log(`Conectado a MongoDB en ${db.connection.host}`);
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    throw error;
  }
}
