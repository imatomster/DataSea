import React, { useState, Fragment } from "react";

import "./styles.css";
import { Dialog, Transition } from "@headlessui/react";

export const DataBox = (props) => {
  const { title, subTitle, fitRate } = props;
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div style={styles.container}>
        <b>
          <h2 style={styles.title}>{title}</h2>
        </b>
        <div style={styles.subTitle}>{subTitle}</div>
        <div style={styles.chart}>
          <svg width="100%" height="100%">
            <path
              d="M0,80 Q25,50 50,70 Q75,60 100,40 Q125,50 150,30 Q175,70 200,60 Q225,90 250,70 Q275,60 300,50"
              stroke="red"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <b>
          <div>
            <span style={styles.subTitle}> Model Fit Rate: </span>
            <span style={styles.option}>{fitRate}</span>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="rounded-md font-bold bg-blue-500 mt-2 px-4 py-2 text-sm text-white transform transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Purchase
          </button>
        </b>
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
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
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
};



const styles = {
  container: {
    width: "350px",
    height: "325px",
    backgroundColor: "#1B2028",
    color: "white",
    padding: "15px",
    borderRadius: "10px",
    position: "relative",
  },
  title: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  subTitle: {
    fontSize: "16px",
    marginBottom: "15px",
    opacity: "0.8",
  },
  chart: {
    width: "100%",
    height: "100px",
    backgroundColor: "#31353F",
    marginBottom: "15px",
    overflow: "hidden",
  },
  option: {
    marginBottom: "10px",
    fontSize: "16px",
  },
};
