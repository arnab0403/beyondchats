import { PanelLeft, NotepadTextDashed } from "lucide-react";
import React, { useContext, useState } from "react";
import { DataProvider } from "./DataContext";
import { Send } from "lucide-react";
import AiChat from "./AiChat";
function Ai() {
  const { aiSideBar, setAiSideBar } = useContext(DataProvider);
  console.log(aiSideBar);
  const [animate, setAnimate] = useState(false);
  const [suggest, setSuggest] = useState(true);
  const [inputText, setInputText] = useState("");
  const [aiChat, setAiChat] = useState(false);
  const handleSuggestButton = () => {
    setAnimate(true);
    setTimeout(() => {
      setInputText("How Do I Get Refund ?");
      setSuggest(false);
    }, 500);
  };

  const handleSendButton = () => {
    setAiChat(true);
    setInputText("");
  };
  return (
    <div
      className={`h-[100vh] w-[100%] ${aiSideBar ? "lg:block" : "hidden"}   `}
    >
      <div className="h-[50px]  flex justify-between pl-2 pr-4 border-b border-b-gray-300">
        <div className="flex">
          <button className="flex justify-center items-center p-3 gap-1 group border-b-2 border-transparent focus:border-b-2 focus:border-blue-600">
            <NotepadTextDashed
              size={20}
              className="group-focus:text-blue-600"
            />
            <p className="group-focus:bg-gradient-to-r from-blue-600 via-violet-600 to-purple-300 group-focus:bg-clip-text group-focus:text-transparent font-semibold">
              AI Copiolot
            </p>
          </button>
          <button className="flex justify-center items-center p-3 gap-1 group border-b-2 border-transparent focus:border-b-2 focus:border-blue-600">
            <p className="group-focus:bg-gradient-to-r from-blue-600 via-violet-600 to-purple-300 group-focus:bg-clip-text group-focus:text-transparent font-semibold">
              Details
            </p>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={() => setAiSideBar(!aiSideBar)}>
            <PanelLeft />
          </button>
        </div>
      </div>
      <div
        className={` h-[calc(100vh-146px)]  w-[100%] flex ${
          !aiChat ? " justify-center" : ""
        } items-center flex-col py-5`}
      >
        {!aiChat && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="black"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-square-chart-gantt-icon lucide-square-chart-gantt"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 8h7" />
              <path d="M8 12h6" />
              <path d="M11 16h5" />
            </svg>
            <h1 className="text-[20px] leading-10">Hi,I'm Fin AI Copiolot</h1>
            <p className="text-[12px] font-extralight">
              Ask me anything about this conversation
            </p>
          </>
        )}
        {aiChat && <AiChat />}
      </div>
      <div className="flex flex-col items-center relative z-10 gap-2 h-[80px]">
        {/* depending in the suggest it will render this coomponet  */}
        {suggest && (
          <div
            className={`bg-white h-[30px] w-[60%] flex justify-center items-center z-40 rounded-lg self-start ml-[19px] cursor-pointer ${
              animate ? "down" : ""
            } absolute`}
            onClick={handleSuggestButton}
          >
            <p className="text-[14px]">
              <span className="font-medium">Suggested </span>How Do i get refund
              ?
            </p>
          </div>
        )}

        <input
          type="text"
          name=""
          id=""
          value={inputText}
          placeholder="Ask a question"
          className="w-[90%] bg-white rounded-lg px-4 py-2 text-black placeholder-gray-400 focus:outline-none h-[40px] z-50 font-extralight absolute bottom-0 transition-all duration-1000 pr-10"
        />
        <Send
          size={20}
          className="absolute right-[7%] bottom-3 hover:text-gray-500 cursor-pointer z-50"
          onClick={handleSendButton}
        />
        <div className="bg-gradient-to-r from-indigo-400 via-indigo-400 to-fuchsia-400 absolute w-[100%] h-[100px] bottom-0 blur-[90px] z-20"></div>
      </div>
    </div>
  );
}

export default Ai;
