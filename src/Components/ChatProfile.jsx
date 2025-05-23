import { useNavigate } from "react-router-dom";

function ChatProfile({ data }) {
  const navigate = useNavigate();
  const message =
    data.messages.length < 18
      ? data.messages
      : data.messages.slice(0, 18) + "......";

  function getColorByInitial(name) {
    const initial = name[0].toUpperCase();
    if ("ABCDEF".includes(initial)) return "bg-[#FF6B6B]";
    if ("GHIJKL".includes(initial)) return "bg-[#6BCB77]";
    if ("MNOPQR".includes(initial)) return "bg-[#4D96FF]";
    if ("STUVWX".includes(initial)) return "bg-[#FFD93D]";
    return "bg-[#845EC2]";
  }

  return (
    <div
      className="w-[100%] flex relative pt-[10px] pb-[10px] pl-[5px] pr-[10px] gap-2 rounded-[10px] hover:bg-[#e9eefa] cursor-pointer"
      onClick={() => navigate(`/chat/${data.name}`)}
    >
      <div>
        <div
          className={`h-[43px] w-[43px] text-[white] rounded-[50%] ${getColorByInitial(
            data.name
          )} flex justify-center items-center `}
        >
          <p>{data.name.charAt(0)}</p>
        </div>
      </div>
      <div>
        <p
          className={`text-[14px] text-[#9fa4b0] ${
            data.viewed === true ? "text-[#9fa4b0]" : "text-[black]"
          }`}
        >
          {data.name} - {data.company.slice(0, data.company.indexOf(" "))}
        </p>
        <div className="flex">
          <p
            className={`text-[14px] text-[#9fa4b0] ${
              data.viewed === true ? "text-[#9fa4b0]" : "text-[black]"
            }`}
          >
            {message}
          </p>
          <p
            className={`text-[14px] text-[#9fa4b0] ${
              data.viewed === true ? "text-[#9fa4b0]" : "text-[black]"
            } absolute right-[15px]`}
          >
            {data.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatProfile;
