import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/src/lib/mongodb";

export const getData = async () => {
  const mongoClient = await clientPromise;

  const data = await mongoClient
    .db("ai_image")
    .collection("aiImage")
    .find()
    .toArray();

  return JSON.parse(JSON.stringify(data));
};

export const addImage = async (imgData: any) => {
  const mongoClient = await clientPromise;

  const response = await mongoClient
    .db("ai_image")
    .collection("aiImage")
    .insertOne(imgData);

  // return response.insertedId;
  return response;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const data = await getData();
    res.status(200).json({ Image: data });
  } else if (req.method === "POST") {
    // expect a customer to be sent with the request
    console.log(req.body);
    const insertedId = await addImage(req.body);
    res.status(200).json(insertedId);
  }
};
