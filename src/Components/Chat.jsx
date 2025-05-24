import {
  Ellipsis,
  MoonStar,
  CircleX,
  MessageSquareText,
  ChevronDown,
  Zap,
  Gift,
  Laugh,
} from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataProvider } from "./DataContext";

const data = [
  {
    id: 1,
    name: "Yash Agarwal",
    data: "Hii This is ... I am facing a problem about refund",
    sender: false,
  },
  {
    id: 1,
    name: "Soumik",
    data: "Let me just look into this for you",
    sender: true,
  },
];
function Chat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(data);
  const { text, setText, setAiSideBar, aiSideBar } = useContext(DataProvider);
  const textareaRef = useRef(null);
  const { name } = useParams();
  console.log(name);
  const handleChange = (e) => {
    setText(e.target.value);

    // Reset height to auto to shrink back if text is removed
    textareaRef.current.style.height = "auto";
    // Set new height based on scrollHeight
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleMessageSend = () => {
    if (text === "") {
      return;
    }
    const chat = {
      id: 3,
      name: "Soumik",
      data: text,
      sender: true,
    };
    setMessage([...message, chat]);
    setText("");
  };

  function getColorByInitial(name) {
    const initial = name[0].toUpperCase();
    if ("ABCDEF".includes(initial)) return "bg-[#FF6B6B]";
    if ("GHIJKL".includes(initial)) return "bg-[#6BCB77]";
    if ("MNOPQR".includes(initial)) return "bg-[#4D96FF]";
    if ("STUVWX".includes(initial)) return "bg-[#FFD93D]";
    return "bg-[#845EC2]";
  }

  useEffect(() => {
    // Adjust height on initial render
    if (textareaRef.current) {
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  const handleClose = () => {
    navigate("/");
    setAiSideBar(false);
  };
  return (
    <>
      <div
        className={`pl-[15px] pr-[15px] z-50  bg-white ${
          aiSideBar ? "hidden sm:block" : ""
        }`}
      >
        <div className="flex items-center justify-between h-[48px]">
          <div>
            <h1>{name}</h1>
          </div>
          <div className="flex gap-[10px]">
            <div className="bg-[#ededed] h-[27px] w-[27px] flex justify-center items-center rounded-[4px] cursor-pointer">
              <Ellipsis size={18} />
            </div>
            <div className="bg-[#ededed] h-[27px] w-[27px] flex justify-center items-center rounded-[4px] cursor-pointer">
              <MoonStar size={18} />
            </div>

            <div
              className="bg-[#000000] text-[white] h-[27px] w-[87px] flex justify-center items-center rounded-[4px] cursor-pointer"
              onClick={handleClose}
            >
              <CircleX size={18} />
              <p className="text-[15px] font-[200]">Close</p>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-50px)]  relative z-50  ">
          {/* {chat portion} */}
          <div className="flex flex-col gap-4 overflow-x-scroll chat h-[calc(100%-150px)] py-5">
            {message.map((data) =>
              data.sender ? (
                <div
                  key={data.id}
                  className={`flex  items-center gap-2 max-w-[95%] max-h-[400px] self-end`}
                >
                  <div className="bg-[#d4dbf4] min-h-[40px] min-w-[100px] max-w-[calc(100%-40px)]  right-0 rounded-[8px] flex p-[10px] text-[15px] font-light">
                    {data.data}
                  </div>
                  <div
                    className={`h-[30px] w-[30px] ${getColorByInitial(
                      data.name
                    )} text-[white] rounded-[50%] flex justify-center items-center  left-0 self-end`}
                  >
                    <p>{data.name.charAt(0)}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={data.id}
                  className={`flex  items-center gap-2 max-w-[95%] max-h-[400px]`}
                >
                  <div
                    className={`h-[30px] w-[30px] ${getColorByInitial(
                      data.name
                    )}  text-[white] rounded-[50%] flex justify-center items-center  left-0 self-end`}
                  >
                    <p>{data.name.charAt(0)}</p>
                  </div>
                  <div className="bg-[#ededed] min-h-[40px] min-w-[100px] max-w-[calc(100%-40px)]  right-0 rounded-[8px] flex p-[10px] text-[15px] font-light">
                    {data.data}
                  </div>
                </div>
              )
            )}
          </div>
          {/* chat Send Portion */}
          <div className="w-[100%]  bg-[#fefefe] shadow-2xl  min-h-[150px] absolute bottom-[10px] rounded-[15px] p-[10px]">
            <div className="flex gap-[2px] items-center justify-between h-[26px]">
              <div className="flex justify-center items-center">
                <MessageSquareText size={18} />
                <p>Chat</p>
                <ChevronDown size={18} className="cursor-pointer" />
              </div>
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => setAiSideBar(true)}
              >
                <h1>AI</h1>
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
            </div>
            <div>
              <textarea
                ref={textareaRef}
                value={text}
                onChange={handleChange}
                type="text"
                className=" focus:outline-none placeholder-[#8f8f96] text-[13px] font-[300] min-h-[40px] p-[10px] w-[100%] resize-none"
                placeholder="Use XX for shortcuts"
              />
            </div>
            <div className="flex h-[35px] items-center bottom-[10px] justify-between  w-full">
              <div className="flex gap-[5px]">
                <div className="h-[30px] w-[30px] flex justify-center items-center p-[5px] cursor-pointer">
                  <Zap />
                </div>
                <div className="border-r-[1px] h-[30px]"></div>
                <div className="h-[30px] w-[30px] flex justify-center items-center  p-[5px] cursor-pointer">
                  <Gift />
                </div>
                <div className="h-[30px] w-[30px] flex justify-center items-center  p-[5px] cursor-pointer">
                  <Laugh />
                </div>
              </div>
              <div className="flex gap-[7px] text-[#8f8f96] font-light">
                <button className="cursor-pointer" onClick={handleMessageSend}>
                  Send
                </button>
                <div className="border-r-[2px]"></div>
                <div>
                  <ChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
