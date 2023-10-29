import React, { useState, Fragment } from "react";

import "./styles.css";
import { Dialog, Transition } from "@headlessui/react";
import { dispenseNFT } from "../utils/handleDispenser";
import { getNFTData } from "../utils/handleData";

export const DataBox = (props) => {
  const { title, subTitle, fitRate } = props;
  let [isOpen, setIsOpen] = useState(false);
  const [swapInProgress, setSwapInProgress] = useState(false);
  const [finished, setFinished] = useState(false);
  const [data, setData] = useState(
    "Year, Average House Price ($), Predicted Price Change (%) 2020, 350,000, 3.0 2021, 360,500, 2.8 2022, 370,926, 2.5 2023, 380,449, 2.3 2024, 389,060, 2.2 2025, 397,786, 2.1 2026, 406,238, 2.0 2027, 414,242, 1.9 2028, 421,806, 1.8 2029, 429,034, 1.7 2030, 436,235, 1.5 2031, 442,838, 1.4 2032, 448,859, 1.3 2033, 454,509, 1.2 2034, 460,054, 1.1 2035, 465,154, 1.0 2036, 469,855, 0.9 2037, 474,082, 0.8 2038, 477,843, 0.7 2039, 481,340, 0.6 2040, 484,582, 0.5"
  );

  function randomizeColorName() {
    const colorNames = [
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Purple",
      "Orange",
      "Pink",
      "Cyan",
      "Magenta",
      "Lime",
      "Teal",
      "Lavender",
      "Brown",
      "Beige",
      "Maroon",
      "Navy",
      "Olive",
      "Turquoise",
      "Silver",
      "Gold",
    ];

    const randomIndex = Math.floor(Math.random() * colorNames.length);
    console.log(colorNames[randomIndex]);
    return colorNames[randomIndex];
  }
  const randomColor = randomizeColorName();

  function randomizePathD() {
    const getRandomValue = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let pathD = "M0," + getRandomValue(65, 85);

    const points = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300];
    for (let i = 0; i < points.length; i += 2) {
      pathD += ` Q${points[i]},${getRandomValue(45, 75)} ${
        points[i + 1]
      },${getRandomValue(55, 75)}`;
    }

    return pathD;
  }

  const pathD = randomizePathD();

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
            <path d={pathD} stroke={randomColor} strokeWidth="2" fill="none" />
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
                    Confirm Purchase:
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Estimated Transaction
                    </p>
                    <p className="text-sm text-green-500">
                      Receive: {title} Data Token{" "}
                    </p>
                    <p className="text-sm text-red-500">
                      Send: {1 - fitRate} MATIC
                    </p>
                    <br></br>
                    <p className="text-sm text-gray-500">
                      Network Fee: $0.00012
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={async () => {
                        setSwapInProgress(true);
                        try {
                          const response = await dispenseNFT("test", "test");
                          console.log(response.dispenserNftAddress);
                          const response2 = await getNFTData();
                          setData(response2.data);
                        } catch (err) {
                          console.log(err);
                        }

                        setSwapInProgress(false);
                        closeModal();
                        setFinished(true);
                      }}
                    >
                      {!swapInProgress ? "Purchase" : "Processing..."}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={finished} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setFinished(false);
          }}
        >
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
                    Payment Complete!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Here is the data you bought:
                    </p>
                    <br></br>
                    <p className="text-sm text-green-500">{data}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={async () => {
                        setFinished(false);
                        setData("");
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
