import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

interface Props {
  showMod: boolean;
  link?: string;
  userPrompt?: string;
  imgDate: string;
  imgId: string;
}

export default function ShowImages({
  showMod,
  link,
  userPrompt,
  imgDate,
  imgId,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(link || "");
  const [prompt, setPrompt] = useState(userPrompt || "");
  const [showModal, setShowModal] = useState(showMod);

  const closeModal = () => setShowModal(false);

  const handleDownload = () => {
    window.open(image, "_blank");
  };

  useEffect(() => {
    setLoading(false);
    setImage(link || "");
    setPrompt(userPrompt || "");
    setShowModal(showMod);
  }, [showMod, link, userPrompt]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <p>Your image is loading...</p>}

      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center w-">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-screen max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Your Latest Image
                  </Dialog.Title>
                  <div className="mt-2">
                    {loading ? (
                      <div className="flex items-center justify-center h-40">
                        <p className="text-gray-500 font-medium">Loading...</p>
                      </div>
                    ) : (
                      <div className="relative">
                        <Image
                          src={image}
                          alt="Your Image"
                          className="w-full h-auto"
                          onLoad={handleImageLoad}
                          onError={() => setLoading(false)}
                          style={{ display: loading ? "none" : "block" }}
                          height={1000}
                          width={1000}
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                          <Image
                            src={"/mark.png"}
                            alt="Your Image"
                            className="w-full h-auto opacity-40 filter grayscale brightness-200 contrast-150 "
                            height={1000}
                            width={1000}
                          />
                        </div>
                      </div>
                    )}
                    <div className="text-sm pt-2 text-gray-500 space-y-3.5">
                      <p>
                        <b> Prompt:</b> {userPrompt}
                      </p>
                      <p>
                        <b> Date Created:</b> {imgDate}
                      </p>
                      <p>
                        <b> Image ID:</b> {imgId}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-x-6 sm:space-x-16  ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border-x-4 border-y-2 border-gray-900  bg-gray-100 px-1 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Get New Image
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-black  px-1 sm:px-4  py-2 text-xs sm:text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleDownload}
                    >
                      Download Now
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
