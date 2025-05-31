import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import * as dotenv from 'dotenv';
dotenv.config();

async function main(): Promise<void> {
    const model = new ChatGoogleGenerativeAI({
        model: "gemini-2.0-flash",
        temperature: 0
    });

    const messages = [
        new SystemMessage("You are a customer care assistant, of Jambo Software company, and your name is Zolo"),
        new HumanMessage("hi, what is your name and what company is this!"),
    ];

    const response = await model.invoke(messages);

    console.log(response.content)
}


main()