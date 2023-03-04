import ImgModal from "@/src/components/ImgModal";
import React, { useState } from "react";

interface Props {
  showMod: boolean;
  link?: string;
  userPrompt?: string;
}

const ShowImages = ({ showMod, link, userPrompt }: Props) => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(link || "");
  const [prompt, setPrompt] = useState(userPrompt || "");
  const [showModal, setShowModal] = useState(showMod);

  const closeModal = () => setShowModal(false);

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
