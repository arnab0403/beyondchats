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
import { useEffect, useRef, useState } from "react";

function Chat() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);

    // Reset height to auto to shrink back if text is removed
    textareaRef.current.style.height = "auto";
    // Set new height based on scrollHeight
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    // Adjust height on initial render
    if (textareaRef.current) {
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);
  return (
    <>
      <div className=" h-[50px] pl-[15px] pr-[15px]">
        <div className="flex items-center h-[100%]  justify-between ">
          <div>
            <h1>User Chat</h1>
          </div>
          <div className="flex gap-[10px]">
            <div className="bg-[#ededed] h-[27px] w-[27px] flex justify-center items-center rounded-[4px] cursor-pointer">
              <Ellipsis size={18} />
            </div>
            <div className="bg-[#ededed] h-[27px] w-[27px] flex justify-center items-center rounded-[4px] cursor-pointer">
              <MoonStar size={18} />
            </div>

            <div className="bg-[#000000] text-[white] h-[27px] w-[87px] flex justify-center items-center rounded-[4px] cursor-pointer">
              <CircleX size={18} />
              <p className="text-[15px] font-[200]">Close</p>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-50px)]  relative ">
          <div className="flex flex-col gap-4">
            <div className="flex  items-center gap-2 max-w-[95%] max-h-[400px]">
              <div className="h-[30px] w-[30px] bg-[#38b3ff] text-[white] rounded-[50%] flex justify-center items-center  left-0 self-end">
                <p>L</p>
              </div>
              <div className="bg-[#ededed] min-h-[40px] min-w-[80px] max-w-[calc(100%-40px)]  right-0 rounded-[8px] flex p-[10px] text-[15px] font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                voluptate porro officiis illo ut laudantium deserunt at velit
                veritatis voluptatibus odio quia repellendus, illum totam, in
                voluptatem aut. Sint, aperiam. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repellendus delectus laboriosam
                explicabo inventore quas voluptas fuga veritatis praesentium,
                culpa ducimus molestiae eum aut aperiam possimus necessitatibus.
                Nam, dolore nisi! Perferendis.lore Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Temporibus exercitationem iste
                ipsam esse tempora autem saepe impedit dignissimos, dolore vitae
                harum fugit voluptas? Nulla et libero rerum quidem accusamus
                consequuntur tempora, ipsam harum doloribus magnam ratione
                dolorem unde! Beatae voluptate suscipit illo repellat ad quidem
                odio id esse vero non repudiandae, quaerat labore assumenda.
                Repudiandae tempora officiis recusandae laboriosam minus ducimus
                dolores natus eum. Natus, voluptatibus earum nulla pariatur
                magni tenetur est ipsum veniam numquam, impedit totam fugit
                repellendus porro nobis incidunt mollitia eligendi a, eos
                sapiente harum quod nostrum minima amet. A, iste nostrum iusto
                cumque ut culpa laborum!
              </div>
            </div>
            <div className="flex  items-center gap-2 max-w-[95%] max-h-[400px] self-end">
              <div className="bg-[#d4dbf4] min-h-[40px] min-w-[80px] max-w-[calc(100%-40px)]  right-0 rounded-[8px] flex p-[10px] text-[15px] font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              </div>
              <div className="h-[30px] w-[30px] bg-[#e64938] text-[white] rounded-[50%] flex justify-center items-center  left-0 self-end">
                <p>S</p>
              </div>
            </div>
          </div>
          {/* chat Send Portion */}
          <div className="w-[100%]  bg-[#fefefe] shadow-2xl  min-h-[150px] absolute bottom-[10px] rounded-[15px] p-[10px]">
            <div className="flex gap-[2px] items-center h-[26px]">
              <MessageSquareText size={18} />
              <p>Chat</p>
              <ChevronDown size={18} className="cursor-pointer" />
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
                <button className="cursor-pointer">Send</button>
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
