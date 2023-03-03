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

  // const newImage = {
  //   prompt,
  //   url,
  // };

  // const databaseResponse = await fetch(`api/imagedb`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(newImage),
  // });

  // const databaseData = await databaseResponse.json();
  // console.log("Received Response from Database", databaseData);
  // console.log("Data Saved to Data Base Successfully");

  console.log("calling callback function ");

  callback();
  return data;
}

export default ImgGenerator;
