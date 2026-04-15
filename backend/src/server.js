import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import database from "./config/database.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// dtabase connection
await database();

  // Basic route for testing
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
  });

  // Mount routes
  app.use('/api/tasks', taskRoutes);


// Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});