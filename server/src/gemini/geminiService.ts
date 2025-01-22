import { GoogleGenerativeAI, GenerativeModel, SchemaType } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMENI_API_KEY;
let genAIModel: GenerativeModel | null = null

const schema = {
    description: "List of jobRows",
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        employerName: {
          type: SchemaType.STRING,
          description: "Name of the company applied to",
          nullable: false,
        },
        dateApplied: {
            type: SchemaType.STRING,
            description: "date of the application of the job (isoString)",
            nullable: true,
        },
        roleName: {
            type: SchemaType.STRING,
            description: "name of the role applied, if not clear, guess based on the context",
            nullable: true,
        },
        status: {
            type: SchemaType.STRING,
            description: `status of the application, possible values are:
            1. applied: applied to a job and a confirmation email of the job has been received, but no response back from recruiter
            2. rejected: the recruiter responded stating that i am no longer considered for the application
            3. action required: the recruiter is asking for more information about the application (such as scheduling or providing more info)
            4. interview scheduled: the recruiter scheduled an interview
            5. need followup: a meeting or interview occured and a followup is needed to get an update from the recruiter
            6. waiting on recruiter: i have sent a message to a recruiter and i have yet to recieve a response
            the default status is applied if not enough info is provided`,
            nullable: false,
        },
        interviewDate: {
            type: SchemaType.STRING,
            description: "if the recruiter sent an interview date, then provide the date (isoString)",
            nullable: true,
        },
        actionToTake: {
            type: SchemaType.STRING,
            description: "if the status is (action required) then specify the action to take, otherwise return blank",
            nullable: true,
        },
        companyWebsite: {
            type: SchemaType.STRING,
            description: "get the website url of company based on the compnay name",
            nullable: true,
        },
        jobPosting: {
            type: SchemaType.STRING,
            description: "get the url of the job posting if one is found based on the role name and company name",
            nullable: true,
        },
      },
      required: ["employerName", "status"],
    },
  };

if (!GEMINI_API_KEY) {
    console.error("Missing environment variables: GEMINI_API_KEY!");
    throw new Error("Missing environment variables!");
}

function initiModel() {
    if (!genAIModel){
        genAIModel =
            new GoogleGenerativeAI(GEMINI_API_KEY || "")
            .getGenerativeModel({model: 'gemini-2.0-flash-exp', 
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: schema,
                }
            });
    } 
    return genAIModel;
}

export async function getModelresponse(prompt: string, jsonString: string): Promise<string> {
    const model = initiModel();

    const result = await model.generateContent(
        // `Process the following Base64 encoded JSON and then answer the prompt:\n\nBase64 JSON: ${jsonString}\n\nPrompt: ${prompt}`,
        // `Parse the following JSON data and answer the prompt:\n\n\`\`\`json\n${jsonString}\n\`\`\`\n\nPrompt: ${prompt}`,
        `${prompt}:\n\n\`\`\`json\n${jsonString}`,

    );
    return result.response.text();
}