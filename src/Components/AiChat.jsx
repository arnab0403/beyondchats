import { SquarePen } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "./DataContext";

function AiChat() {
  const message =
    "We’re sorry, but we can’t process your refund because your purchase was made over 60 days ago. Our policy only allows refunds within 60 days of purchase. If you have questions or need further help, please contact our support team.";

  const [reserch, setResearch] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [composer, setComposer] = useState(false);
  const { setAiSideBar } = useContext(DataProvider);
  const [response, setResponse] = useState(false);

  const { setText } = useContext(DataProvider);
  // Typewriter effect
  useEffect(() => {
    setTypedText(""); // Reset on mount
    const indexRef = { current: 0 };
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setTypedText(message.slice(0, indexRef.current + 1));
        indexRef.current += 1;
        if (indexRef.current >= message.length) {
          setComposer(true);
          clearInterval(interval);
        }
      }, 18);

      setComposer(true);
    }, 3100); // 2000ms delay

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [message]);

  useEffect(() => {
    setTimeout(() => {
      setResearch(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => setShowFirst(true), 1500); // first bubble
    setTimeout(() => setShowSecond(true), 2000); // second bubble
    setTimeout(() => setShowThird(true), 2500); // third bubble
    setTimeout(() => setResponse(true), 3000);
  }, []);
  const handleComposerButton = () => {
    setText(typedText);
    setAiSideBar(false);
  };
  return (
    <>
      <div className="bg-white gap-2 flex justify-center items-center z-40 rounded-md self-start ml-[19px]  animate-slideDown">
        <div className=" h-[25px] w-[25px] bg-blue-500 text-white rounded-[50%] text-center text-[15px] self-start">
          <p>L</p>
        </div>
        <div>
          <p className="text-[17px]">You</p>
          <p className="text-[15px] font-light">Hii This is Chat Bot</p>
        </div>
      </div>

      <div className="mt-3.5 bg-white gap-2 flex justify-center items-center z-40  self-start ml-[19px]  animate-slideDown ">
        <div className=" h-[25px] w-[25px] text-white text-center text-[15px] self-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
        </div>
        <div>
          <div>
            <p className="text-[17px]">Fin</p>
            {response && (
              <div className="min-h-[100px] w-[300px] bg-gradient-to-r from-violet-300 via-pink-200 to-rose-100 rounded-[10px] p-3 text-[15px] font-light shadow-2xl">
                <p>{typedText}</p>
                {composer && (
                  <div
                    className="h-[40px] w-full bg-white text-center rounded-[10px] cursor-pointer flex justify-center items-center gap-1"
                    onClick={handleComposerButton}
                  >
                    <SquarePen />
                    <p className="font-normal">Add to composer</p>
                  </div>
                )}
              </div>
            )}

            {!reserch && (
              <p className="text-[15px] font-light text-gray-600 ">
                Serching for relevant source...
              </p>
            )}

            {reserch && (
              <p className="text-[15px] font-light text-gray-600">
                Research source I found...
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-1">
            {showFirst && (
              <div className="flex gap-1.5">
                <div className="h-[20px] w-[20px] rounded-[50%] bg-gray-200 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="black"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-book-open-icon lucide-book-open"
                  >
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <p className="text-[13px] font-light">Getting a Refund</p>
              </div>
            )}
            {showSecond && (
              <div className="flex gap-1.5">
                <div className="h-[20px] w-[20px] rounded-[50%] bg-gray-200 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#007cf8"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-message-square-text-icon lucide-message-square-text"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M13 8H7" />
                    <path d="M17 12H7" />
                  </svg>
                </div>
                <p className="text-[13px] font-light">
                  Refund for an order placed by mistake
                </p>
              </div>
            )}
            {showThird && (
              <div className="flex gap-1.5">
                <div className="h-[20px] w-[20px] rounded-[50%] bg-gray-200 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#007cf8"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-message-square-text-icon lucide-message-square-text"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M13 8H7" />
                    <path d="M17 12H7" />
                  </svg>
                </div>
                <p className="text-[13px] font-light">
                  Refund for an unwanted gift
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AiChat;
