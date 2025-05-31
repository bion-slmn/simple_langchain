import express from "express";
import cors from "cors";
import { HumanMessage } from "@langchain/core/messages";
import { createApp } from './agent'

const app = express();
app.use(cors());
app.use(express.json());


interface config {
  thread_id: string;
}

interface Results {
  content: string;
}

const defaultConfig: config = {
  thread_id: "default-thread",
};

let agent: Awaited<ReturnType<typeof createApp>>;

const start = async () => {
  agent = await createApp();


  app.post("/api/ask", async (req, res) => {
    const { message } = req.body;
    try {
      const response = await agent.invoke(
        {
          messages: [new HumanMessage(message)],
        },
        {
          configurable: {
            thread_id: defaultConfig.thread_id,
          },

        }
      );
      console.log("Response:", response);
      res.json(response);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Failed to respond" });
    }
  });


  app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
  });
};

start();
