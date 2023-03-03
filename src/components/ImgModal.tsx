import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ImageModalProps as Props } from "@/src/types";

export default function ImgModal({
  isOpen,
  statusImage,
  onClose,
  userPrompt,
}: Props) {
  let image = statusImage;

  console.log("Image URL: ", image);

  const handleDownload = () => {
    window.open(image, "_blank");
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                    {image && (
                      <div className="relative">
                        <img
                          src={image}
                          alt="Your Image"
                          className="w-full h-auto"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                          {/* <p className="text-3xl text-white font-bold">Your Text Here</p> */}
                          <img
                            src={"/mark.png"}
                            alt="Your Image"
                            className="w-full h-auto opacity-40 filter grayscale brightness-200 contrast-150 "
                          />
                        </div>
                      </div>
                    )}
                    <div className="text-sm pt-2 text-gray-500">
                      <p>
                        {" "}
                        <b> Prompt:</b> {userPrompt}{" "}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-x-6 sm:space-x-16  ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border-x-4 border-y-2 border-gray-900  bg-gray-100 px-1 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={onClose}
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
    </>
  );
}
