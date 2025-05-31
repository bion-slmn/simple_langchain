
````markdown
# LangChain TypeScript Example

This is a simple TypeScript project that uses LangChain and Google's Gemini (via `ChatGoogleGenerativeAI`) to simulate a customer care assistant.

## 🛠️ Features

- Uses LangChain's `ChatGoogleGenerativeAI` wrapper.
- Sends structured chat messages (System and Human).
- Runs directly with `ts-node`.

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/bion-slmn/simple_langchain.git
cd simple_langchain
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment

Create a `.env` file in the root:

```
GOOGLE_API_KEY=your_google_api_key_here
```

> Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### 4. Run the app

```bash
npx ts-node main.ts
```

---

## 📁 Project Structure

```
.
├── main.ts         # Entry point
├── .env            # API key storage
├── package.json
└── tsconfig.json   # TypeScript config
```

---

## 📄 Example Output

```
Zolo: Hello! I'm Zolo, your customer care assistant from Jambo Software. How can I assist you today?
```

---

## 📚 Technologies

* TypeScript
* LangChain
* Google Gemini API
* ts-node

---

