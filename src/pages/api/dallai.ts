// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import {
  CreateImageRequestSizeEnum,
  GenerateRequest,
  ResponseData,
} from "@/src/types";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: GenerateRequest,
  res: NextApiResponse<ResponseData>
) {
  const promptString = req.body.prompt;
  const n = req.body.n;
  const size = req.body.size;

  let sSize: CreateImageRequestSizeEnum | undefined;

  console.log(
    " Image Size before Passing it to API inside the DallAI File ",
    size
  );

  switch (size) {
    case "256x256":
      sSize = CreateImageRequestSizeEnum["256x256"];
      break;
    case "512x512":
      sSize = CreateImageRequestSizeEnum["512x512"];
      break;
    case "1024x1024":
      sSize = CreateImageRequestSizeEnum["1024x1024"];
      break;
    default:
      sSize = CreateImageRequestSizeEnum["256x256"];
  }

  console.log(
    " Image Size after Passing it to API inside the DallAI File ",
    sSize
  );

  // const size = req.body.size;
  if (!promptString || undefined) {
    return new Response("you need a prompt", { status: 400 });
  }
  const aiResponse = await openai.createImage({
    prompt: `${promptString}`,
    n: n,
    size: sSize,
  });
  const imageUrl = aiResponse.data.data[0].url;
  res.status(200).json({ url: imageUrl });
}
