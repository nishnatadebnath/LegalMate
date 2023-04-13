import React, { useState } from "react";
import { PrimaryButton } from "./Buttons";

import axios from "axios";

const Summarizer = () => {
  const [text, setText] = useState("");

  const [summarizedText, setSummarizedText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log({ text });
      const response = await axios.post(
        `http://127.0.0.1:8000/?command=summarize&input_text=${text}`,
        {
          headers: {
            "Context-type": "application/json",
          },
        }
      );

      console.log({ response: response.data[0] });
      setSummarizedText(response.data[0]);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="flex h-screen justify-between w-4/5 mx-auto">
      <div className="bg-white shadow-2xl rounded-lg p-12 h-3/4 w-1/2 flex flex-col justify-between items-center m-6">
        <h3 className="text-black font-bold">
          Enter the legal text to summarize
        </h3>

        <textarea
          className="h-full my-6 p-3 w-full rounded-lg border-2 border-gray-300 text-black"
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <p className="text-primary font-bold">or</p>

        <PrimaryButton text="Upload File" />

        <PrimaryButton
          text="Summarize"
          size="large"
          handleClick={handleSubmit}
        />
      </div>

      <div className="bg-white shadow-2xl rounded-lg p-12 h-3/4 w-1/2 flex flex-col justify-between items-center m-6">
        <h3 className="text-black font-bold">
          Generated Summary of the document
        </h3>

        <textarea
          className="h-full my-6 p-3 w-full rounded-lg border-2 border-gray-300 text-black"
          value={summarizedText}
        ></textarea>
        {/* <div>{summarizedText}</div> */}
      </div>
    </div>
  );
};

export default Summarizer;
