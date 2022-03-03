import React, { useState, useEffect } from "react";
const axios = require("axios").default; // axios is a promise based HTTP client for the browser and node.js

export default function Translator() {
  const [options, setOptions] = useState([]);
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("en");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const translate = () => {
    // curl -X POST "https://libretranslate.com/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

    axios
      .post("https://libretranslate.com/translate", params, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.translatedText(s));
      });
  };

  useEffect(() => {
    axios
      .get("https://libretranslate.com/languages", {
        headers: { accept: "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);

  // curl -X GET "https://libretranslate.com/languages" -H  "accept: application/json"

  return (
    <div className="flex flex-col justify-center bg-[#111116] items-center md:h-screen md:w-[80%] w-full">
      <div className="flex md:flex-row tablet:flex-row flex-col gap-4 md:w-auto w-full pt-10">
        <div className="flex flex-col bg-[#1B1B1F] pb-16 px-4 pt-4 rounded-xl">
          <div className="flex pb-4 items-center w-full">
            
            <span className="text-[#e5e5e5]">From ({from}) :</span>
            <div className="flex items-center bg-[#111116] text-white ml-4 tablet:w-[200px] md:w-[300px] w-[220px] rounded-full px-6 py-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <select
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
                className="bg-[#111116] w-full ml-2 cursor-pointer focus:outline-none"
              >
                {options.map((opt) => (
                  <option key={opt.code} value={opt.code}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <textarea
            onInput={(e) => setInput(e.target.value)}
            className="bg-[#1B1B1F] text-white focus:outline-none"
            cols="50"
            rows="10"
          ></textarea>
        </div>
        <div className="flex flex-col bg-[#1B1B1F] pb-16 px-4 pt-4 rounded-xl">
          <div className="flex items-center w-full pb-4">
            <span className="text-[#e5e5e5]">To ({to}) :</span>
            <div className="flex items-center bg-[#111116] text-white ml-4 tablet:w-[200px] md:w-[300px] w-[250px] rounded-full px-6 py-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <select
                onChange={(e) => {
                  setTo(e.target.value);
                }}
                className="bg-[#111116] w-full ml-2 cursor-pointer focus:outline-none"
              >
                {options.map((opt) => (
                  <option key={opt.code} value={opt.code}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <textarea
            value={output}
            // onChange={(e) => setOutput(e.target.value)}
            className="bg-[#1B1B1F] text-white focus:outline-none"
            cols="50"
            rows="10"
          ></textarea>
        </div>
      </div>
      <button
        onClick={(e) => translate()}
        className="md:mt-8 mt-2 text-white bg-black px-8 py-2 rounded-full"
      >
        Translate
      </button>
      <small className="flex text-gray-500 py-8 mt-8">
        Made by ❤️ Ranjit Kairi
        <a href="https://github.com/tsr-kairi" className="text-blue-700">
          👉 Checkout My Latest Projects
        </a>
      </small>
    </div>
  );
}
