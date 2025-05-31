import { useState } from "react";


function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response");
      }
      const data = await res.json();

      // Extract last message content
      const messages = data.messages;
      const lastMessage = messages?.[messages.length - 1];
      const content = lastMessage?.kwargs?.content || "No response";

      setResponse(content);
    } catch (error) {
      console.error(error);
      setResponse("An error occurred");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>LangChain Assistant</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: 300, marginRight: 10 }}
        />
        <button type="submit">Ask</button>
      </form>
      <div style={{ marginTop: 20 }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
