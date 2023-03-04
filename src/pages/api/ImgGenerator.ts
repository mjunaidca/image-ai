interface ImgGeneratorProps {
  prompt: string;
  size: string;
  callback: () => void;
}

async function ImgGenerator({ prompt, size, callback }: ImgGeneratorProps) {
  console.log("Starting Image Generator Function");

  console.log("Sending Request to API");

  const response = await fetch(`api/dallai`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: prompt,
      size: size,
      n: 1,
    }),
  });

  const data = await response.json();
  console.log("Received Response from API");
  console.log("Ending Image Generator Function");

  // const imgUrl = await data;
  // const url = imgUrl.url;

  console.log("Sending Data to the Database");

  // console.log("Data Saved to Database Successfully");
  const newImage = {
    prompt: prompt,
    original_image_url: data.url,
    date_created: new Date(),
  };

  const databaseResponse = await fetch(`api/aiimg`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newImage),
  });

  const databaseData = await databaseResponse.json();

  // console.log("Received ID from Database", databaseData.insertedId);

  console.log("Data Saved to Data Base Successfully");

  console.log("calling callback function ");

  callback();

  // return data;
  return { orgUrl: data.url, id: databaseData.insertedId };
}

export default ImgGenerator;
