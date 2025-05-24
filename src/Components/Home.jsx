import { useParams } from "react-router-dom";
import Chat from "./Chat";
import ChatProfile from "./ChatProfile";
import { useContext } from "react";
import { DataProvider } from "./DataContext";
import Ai from "./Ai";

const users = [
  {
    name: "Aarav Sharma",
    company: "TechNova Solutions",
    time: "45min",
    messages:
      "Hello, I’m facing an issue with the dashboard layout. Can you help?",
    viewed: false,
  },
  {
    name: "Priya Mehta",
    company: "GreenByte Ltd.",
    time: "90min",
    messages: "The analytics panel isn’t updating in real-time.",
    viewed: true,
  },
  {
    name: "Rohan Verma",
    company: "SkyHigh Innovations",
    time: "60min",
    messages: "Can we schedule a call to discuss the API integration?",
    viewed: false,
  },
  {
    name: "Sanya Kapoor",
    company: "PixelCraft Studios",
    time: "25min",
    messages: "Thanks for the quick support on the login issue!",
    viewed: true,
  },
  {
    name: "Kabir Malhotra",
    company: "LogiTrack Systems",
    time: "50min",
    messages: "We’re seeing duplicate entries in our reports. Please check.",
    viewed: false,
  },
  {
    name: "Meera Desai",
    company: "EduSpark Technologies",
    time: "75min",
    messages: "Can you guide us through the new features in the update?",
    viewed: true,
  },
  {
    name: "Rahul Joshi",
    company: "FusionSoft Inc.",
    time: "30min",
    messages: "I’ve attached screenshots of the error page we’re getting.",
    viewed: false,
  },
  {
    name: "Ananya Rao",
    company: "SmartFarm India",
    time: "15min",
    messages: "The mobile version isn’t rendering properly on Safari.",
    viewed: true,
  },
  {
    name: "Yash Agarwal",
    company: "QuickCart Pvt. Ltd.",
    time: "55min",
    messages: "Please confirm if the payment gateway is down.",
    viewed: false,
  },
  {
    name: "Diya Nair",
    company: "Zentra Networks",
    time: "5min",
    messages: "All set from our side. Awaiting your deployment update.",
    viewed: true,
  },
];

function Home() {
  //getting the parameter from the url
  const { name } = useParams();
  const { aiSideBar } = useContext(DataProvider);
  return (
    <div
      className={`nav w-[100vw] bg-[#fff] grid ${
        aiSideBar
          ? "lg:grid-cols-[300px_auto_400px] sm:grid-cols-[auto_400px] flex"
          : "lg:grid-cols-[300px_auto]"
      } `}
    >
      <div
        className={`h-[100vh]  lg:block ${name ? "hidden" : ""} ${
          aiSideBar ? " sm:hidden" : ""
        }`}
      >
        <div className=" flex items-center pl-[13px] h-[50px]">
          <h1 className="text-[20px] font-medium">Your Inbox</h1>
        </div>
        <div className="w-[100%] pl-[5px] pr-[2px]">
          {users.map((data, key) => {
            return <ChatProfile data={data} key={key} />;
          })}
        </div>
      </div>
      {/* {redering the chat panel based on the name exit on the url} */}
      {name && <Chat />}
      {aiSideBar && <Ai />}
    </div>
  );
}

export default Home;
