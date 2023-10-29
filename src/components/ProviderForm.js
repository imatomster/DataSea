import React, { useState, Fragment } from "react";

import "./styles.css";
import { Dialog, Transition } from "@headlessui/react";
import { createDispenser } from "../utils/handleDispenser";
import { setNFTData } from "../utils/handleData";

const ProviderForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dataType, setDataType] = useState("");

  let [isOpen, setIsOpen] = useState(false);
  const [swapInProgress, setSwapInProgress] = useState(false);
  const [address, setAddress] = useState({
    dispenserNftAddress: "",
    dispenserDatatokenAddress: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="provider-form">
      <h2>Metadata Title:</h2>
      <input
        type="text"
        placeholder="Title/Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <h2>Data Input / Description:</h2>
      <textarea
        placeholder="Description"
        value={description}
        rows="7"
        onChange={(e) => setDescription(e.target.value)}
      />

      <h2>Data Category:</h2>

      <select value={dataType} onChange={(e) => setDataType(e.target.value)}>
        <option value="" disabled>
          Select Data Type
        </option>
        {/* Add your data types here */}
        <option value="type1">Numerical</option>
        <option value="type2">Categorical</option>
        <option value="type3">CSV</option>
        <option value="type4">Tab Spaced</option>
        <option value="type5">Processed</option>
        <option value="type5">Raw</option>
        <option value="type5">Streams</option>
      </select>
      <div className="last2kids">
        <button
          className="transition-transform hover:scale-105 "
          disabled={swapInProgress}
          onClick={async () => {
            setSwapInProgress(true);

            createDispenser(title, "n/a").then((res) => {
              console.log(res);
              setAddress(res);
              setNFTData(description, res.dispenserNftAddress).then((res2) => {
                console.log(res2);
                openModal();
              });
              setSwapInProgress(false);
            });
          }}
        >
          {!swapInProgress ? " Publish Data NFT" : "Processing..."}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Data Posted to Marketplace!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Data Token Dispenser Address:{" "}
                    </p>

                    <a
                      href={
                        "https://mumbai.polygonscan.com/address/" +
                        address.dispenserDatatokenAddress
                      }
                      className="text-sm text-blue-500 underline"
                    >
                      {address.dispenserDatatokenAddress}
                    </a>
                    <br></br>
                    <p className="text-sm text-gray-500">NFT Address: </p>
                    <a
                      href={
                        "https://mumbai.polygonscan.com/address/" +
                        address.dispenserNftAddress
                      }
                      className="text-sm text-blue-500 underline"
                    >
                      {address.dispenserNftAddress}
                    </a>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={async () => {
                        closeModal();
                      }}
                    >
                      Back to Home!
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
};

export { ProviderForm };
