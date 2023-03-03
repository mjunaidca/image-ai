import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetRequest(req, res);
  } else if (req.method === "POST") {
    handlePostRequest(req, res);
  } else {
    res.status(405).send("Method not allowed");
  }
}

function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "json/data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  res.status(200).json(data);
}

function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "json/data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  const newData = req.body;
  data.push(newData);

  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, updatedData, "utf8");

  res.status(200).send("Data added successfully");
}

export { handler };
