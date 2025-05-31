import { subtractionTool, additionTool, webSearch, wikipedia } from './tools';
import { HumanMessage, SystemMessage, BaseMessage } from "@langchain/core/messages";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { MemorySaver } from "@langchain/langgraph";
import { loadModel } from './loadModel';



const modifyMessages = (messages: BaseMessage[]) => {
  return [
    new SystemMessage("You are a math and research assistant. Respond clearly, and cite sources if applicable."),
    ...messages,
    new HumanMessage("After your answer, ask the user if they are happy."),
  ];
};


export const createApp = async () => {
  const llm = await loadModel();
  const tools = [subtractionTool, additionTool, webSearch, wikipedia];
  const checkpointer = new MemorySaver();



  return createReactAgent({
    llm,
    tools,
    messageModifier: modifyMessages,
    checkpointSaver: checkpointer,
  });
};
