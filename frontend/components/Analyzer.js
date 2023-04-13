import React, { useState } from "react";
import { PrimaryButton } from "./Buttons";

import axios from "axios";

const Analyzer = () => {
  const [text, setText] = useState("");
  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/answer?docs=${text}&quest=${question}`,
        {
          headers: {
            "Context-type": "application/json",
          },
        }
      );

      setAnswer(response.data[0]);
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
      </div>

      <div className="bg-white shadow-2xl rounded-lg p-12 h-3/4 w-1/2 flex flex-col justify-between items-center m-6">
        <h3 className="text-black font-bold">Type in your question!</h3>

        <textarea
          className="h-full my-6 p-3 w-full rounded-lg border-2 border-gray-300 text-black"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <PrimaryButton
          text="Ask away!"
          size="large"
          handleClick={handleSubmit}
        />
        <h3 className="text-black font-bold">Answer as per your document</h3>
        <textarea
          className="h-full my-6 p-3 w-full rounded-lg border-2 border-gray-300 text-black"
          value={answer}
        ></textarea>
        {/* <div>{summarizedText}</div> */}
      </div>
    </div>
  );
};

export default Analyzer;
