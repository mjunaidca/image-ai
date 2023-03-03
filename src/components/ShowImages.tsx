import useSWR from "swr";
import ImgModal from "@/src/components/ImgModal";
import React, { useState, useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  showMod: boolean;
  load: boolean;
  link?: string;
  userPrompt?: string;
}

const ShowImages = ({ showMod, load, link, userPrompt }: Props) => {
  console.log("Called the ShowImages Component");

  const [loading, setLoading] = useState(load);
  const [image, setImage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [showModal, setShowModal] = useState(showMod);

  const { data, error } = useSWR("api/imagedb", fetcher);

  useEffect(() => {
    if (link && userPrompt) {
      setImage(link);
      setPrompt(userPrompt);
      setLoading(false);
      setShowModal(true);
      console.log("redndering image from direct link");
    } else if (data) {
      const imageDataArr = [...data.imagedb];
      const inverseOrder = imageDataArr.reverse();

      const url = inverseOrder[0].imageURL[0];
      const userPrompt = inverseOrder[0].prompt;

      setImage(url);
      setPrompt(userPrompt);

      setLoading(false);
      setShowModal(true);
      console.log("Link: ", link);
      console.log("User Prompt: ", userPrompt);

      console.log("redndering image by fetching data");
    }
  }, [data, link, userPrompt]);

  if (error) return <div>Failed to load</div>;
  if (!data && !link && !userPrompt) return <div>Loading...</div>;

  const closeModal = () => setShowModal(false);

  let arr: string[] = [image, prompt];

  // console.log("Image URL: ", image);
  // console.log("Prompt: ", prompt);

  return (
    <div>
      {loading && <p>Your image is loading...</p>}

      <ImgModal
        isOpen={showModal}
        onClose={closeModal}
        userPrompt={prompt}
        statusImage={image}
      />
    </div>
  );
};

export default ShowImages;
