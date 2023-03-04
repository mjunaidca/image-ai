import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/src/lib/mongodb";
import { ObjectId } from "mongodb";

export const getImage = async (id: string | ObjectId) => {
  id = typeof id === "string" ? new ObjectId(id) : id;

  const mongoClient = await clientPromise;

  const data = await mongoClient
    .db("ai_image")
    .collection("aiImage")
    .findOne({ _id: id });

  return data;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id!;

  const data = await getImage(new ObjectId(id as string));

  if (!data) {
    res.status(404).json({ message: `Customer with id: ${id} not found.` });
    return;
  }

  res.status(200).json({ customer: data });
};
