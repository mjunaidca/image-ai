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

  switch (size) {
    case "small":
      sSize = CreateImageRequestSizeEnum["256x256"];
      break;
    case "medium":
      sSize = CreateImageRequestSizeEnum["512x512"];
      break;
    case "large":
      sSize = CreateImageRequestSizeEnum["1024x1024"];
      break;
    default:
      sSize = CreateImageRequestSizeEnum["256x256"];
  }

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
