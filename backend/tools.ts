import { WikipediaQueryRun } from "@langchain/community/tools/wikipedia_query_run";
import { DuckDuckGoSearch } from "@langchain/community/tools/duckduckgo_search";
import { tool } from "@langchain/core/tools";
import { z } from "zod";

// Wikipedia tool
export const wikipedia = new WikipediaQueryRun({
  topKResults: 3,
  maxDocContentLength: 4000,
});


export const webSearch = new DuckDuckGoSearch({
  maxResults: 2,
});


const addSchema = z.object({
  a: z.number(),
  b: z.number(),
});


export const additionTool = tool(
  async (input: { a: number; b: number }): Promise<number> => {
    return input.a + input.b;
  },
  {
    name: "addition",
    description: "Add two numbers",
    schema: addSchema,
  }
);

const subtractSchema = z.object({
  a: z.number(),
  b: z.number(),
});

export const subtractionTool = tool(
  async (input: { a: number; b: number }): Promise<number> => {
    return input.a - input.b;
  },
  {
    name: "subtraction",
    description: "Subtracts b from a",
    schema: subtractSchema,
  }
);
