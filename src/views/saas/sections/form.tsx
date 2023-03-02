"use client";
import React, { useState } from "react";
import { IMAGE_STYLE, ARTISTS_STYLE, MODIFIERS_STYLE } from "@/src/utils/constants";
import { InputField, SizeSelector, GenerateButton, Dropdown, } from "@/src/components/formComponents";
import Gen from "@/src/pages/api/response";
import Modal from "@/src/components/Modal";

// import getImage from "./getImage";
// import ShowImages from "./ShowImages";

export const Form = () => {
    const [userPrompt, setUserPrompt] = useState("");
    const [size, setSize] = useState("256x256");
    const [imageStyle, setImageStyle] = useState("");
    const [artistStyle, setArtistStyle] = useState("");
    const [modifiersStyle, setModifiersStyle] = useState("");
    const [showMod, setShowMod] = useState(false);
    const [load, setLoad] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [linkPrompt, setLinkPrompt] = useState("");

    const [link, setLink] = useState("");
    const [modal, openModal] = useState(false);
    const closeModal = () => openModal(false);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // console.log("Sending request to server");

        setShowMod(false);
        setLoad(false);
        setShowSpinner(true);

        const prompt = `${userPrompt} ${imageStyle} ${artistStyle} ${modifiersStyle}`;

        // callback function to handle the modal box to render the image
        // let response: any;
        const response = await Gen(prompt);
        console.log(response);


        const handleImage = () => {
            setShowSpinner(false);
            setShowMod((prevShowMod) => !prevShowMod);
            setLoad((prevLoad) => !prevLoad);
            setLinkPrompt(prompt);
        };

        // response = await getImage({ prompt, size, callback: handleImage });
        // response = await Gen;

        const data = await response;
        console.log('data');
        console.log(data);

        setLink(data.url);
        openModal(true)
    };

    return (
        <div className="flex flex-1 w-screen flex-col items-center justify-center text-center px-4 mt-1 sm:mt-0 mx-auto">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 sm:w-9/12"
            >
                <div className="flex mt-0 items-center space-x-3">
                    <p className="text-left text-md sm:text-lg font-medium">
                        Enter Image Prompt{" "}
                        <span className="text-slate-500">(or tell us your idea)</span>.
                    </p>
                </div>

                <InputField
                    value={userPrompt}
                    onChange={(event) => setUserPrompt(event.target.value)}
                    placeholder={"e.g. a white cat or an astronut in the space."}
                />

                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-x-4">
                    {/* First DrawDown: Select your Image Style  */}
                    <Dropdown
                        ImagePath="/1-black.png"
                        ImageAlt="Icon 1"
                        Label="Image Style"
                        Value={imageStyle}
                        onChange={(event) => setImageStyle(event.target.value)}
                        Options={IMAGE_STYLE}
                    />

                    {/* Second DrawDown: Select your Artist Style  */}
                    <Dropdown
                        ImagePath="/2-black.png"
                        ImageAlt="Icon 2"
                        Label="Artist Style"
                        Value={artistStyle}
                        onChange={(event) => setArtistStyle(event.target.value)}
                        Options={ARTISTS_STYLE}
                    />

                    {/* Third DrawDown: Select your Modifers Style  */}
                    <Dropdown
                        ImagePath="/3-icon.jpg"
                        ImageAlt="Icon 3"
                        Label="Modifers Style"
                        Value={modifiersStyle}
                        onChange={(event) => setModifiersStyle(event.target.value)}
                        Options={MODIFIERS_STYLE}
                    />
                </div>

                {/* Select Size  */}
                <SizeSelector
                    value={size}
                    onChange={(event) => setSize(event.target.value)}
                />

                {/* Generate Button  */}
                <GenerateButton handleSubmit={handleSubmit} showSpinner={showSpinner} />
            </form>
            <div>
                {/* {showSpinner && (
          <div className="overlay">
            <div className="spinner" />
          </div>
        )} */}
                {/* {showMod && (
                    <ShowImages
                        showMod={showMod}
                        load={load}
                    // link={link}
                    // userPrompt={linkPrompt}
                    />
                )} */}
                <Modal statusImage={link} userPrompt={userPrompt} isOpen={modal} onClose={closeModal} />
            </div>
        </div>
    );
};
