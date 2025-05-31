

# 🧠 Ask-Web Agent

A full-stack AI-powered math and research assistant built with:

* **LangChain (LangGraph + Tools)**
* **Google Gemini (via LangChain's `ChatGoogleGenerativeAI`)**
* **DuckDuckGo & Wikipedia tools**
* **Express.js + TypeScript** backend
* **React + TailwindCSS** frontend


---

## 📦 Project Structure

```
.
├── backend/
│   ├── index.ts              # Express server
│   ├── agent.ts              # LangGraph agent setup
│   ├── tools.ts              # Custom tools (add, subtract, search)
│   └── loadModel.ts          # Gemini model loader
├── frontend/
│   ├── App.tsx               # Main React component
│   ├── index.tsx             # React entry
│   
├
├── package.json
└── README.md
```

---

## 🚀 Features

* 🔢 **Math tools** – Addition and subtraction via LangChain `tool()`
* 🌐 **Web search** – DuckDuckGo and Wikipedia query integration
* 🧠 **AI Assistant** – Google Gemini with customizable prompt behavior
* 💬 **Chat UI** – Built in React with a spinner during async operations

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ask-web.git
cd ask-web
```

### 2. Install dependencies

```bash
npm install
```

or separately in `frontend/` and `backend/`.

### 3. Add environment variables

Create a `.env` file in the root with your Google API key:

```env
GOOGLE_API_KEY=your_google_api_key_here
```

### 4. Run the development server

```bash
# Start backend
cd backend
npx ts-node index.ts

# In another terminal, start frontend
cd frontend
npm run dev
```

Backend will run on `http://localhost:3001`, frontend on `http://localhost:5173` (Vite default).

---


## 🧠 Example Tools

```ts
const AddSchema = z.object({
  a: z.number(),
  b: z.number(),
});

const additionTool = tool(async ({ a, b }) => a + b, {
  name: "addNumbers",
  description: "Adds two numbers",
  schema: AddSchema,
});
```



