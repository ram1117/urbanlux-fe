"use client";

import { useEffect, useRef, useState } from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import HelpIcon from "@public/icons/bot_icon.svg";
import CloseIcon from "@public/icons/close-icon.svg";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { postPrompt } from "@/lib/api/apiurls";

const ChatWindow = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    { time: Date; message: string; type: "sent" | "received" }[]
  >([]);
  const [errors, setErrors] = useState<string | null>();
  const [loading, setLoading] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleKeyPress = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputPrompt.length > 240) {
        setErrors("Max length is 240");
        return;
      }
      setChatHistory((prev) => [
        ...prev,
        { time: new Date(), message: inputPrompt, type: "sent" },
      ]);
      setInputPrompt("");
      setLoading(true);
      const response = await makeApiRequest(API_METHODS.POST, postPrompt(), {
        prompt: inputPrompt,
      });
      if (!response?.ok) {
        setErrors("Error getting data");
        setLoading(false);
        return;
      }
      setLoading(false);
      const data = await response.json();
      setChatHistory((prev) => [
        ...prev,
        { time: new Date(), message: data.message, type: "received" },
      ]);
    }
  };
  return (
    <aside className="hidden lg:block">
      <button
        className="text-dark bg-light p-1 rounded-full w-max fixed bottom-6 right-4 shadow-md shadow-dark"
        onClick={() => setChatOpen((prev) => !prev)}
      >
        <ImageWrapper
          src={chatOpen ? CloseIcon : HelpIcon}
          alt={chatOpen ? "Close Chat Icon" : "Help Icon"}
          imageSize={"w-8 h-8"}
        ></ImageWrapper>
      </button>
      {chatOpen && (
        <div className="h-[65vh] bg-light text-dark fixed bottom-6 right-16 w-[500px] rounded-md p-4 flex flex-col gap-4 shadow-md shadow-dark">
          <p className="text-center py-2 border-b border-dark text-lg">
            Hi, How can we help you today
          </p>
          <div className="h-[55vh] overflow-y-auto relative pb-6">
            <ul>
              {chatHistory.map((data) => {
                const bubbleStyle =
                  data.type === "sent"
                    ? "self-start bg-blue-200"
                    : "self-end bg-slate-200";
                return (
                  <li
                    className="p-2 flex flex-col gap-2"
                    key={data.time.toISOString()}
                  >
                    <div
                      className={`${bubbleStyle} w-5/6  px-4 py-2 rounded-md shadow-md`}
                    >
                      {data.message}
                    </div>
                  </li>
                );
              })}
            </ul>
            <div ref={chatEndRef}></div>
            {loading && (
              <p className="absolute bottom-4 right-4 text-xl font-black">
                . . .
              </p>
            )}
          </div>
          <div className="">
            <form className="flex flex-row gap-1">
              <textarea
                className="border border-dark w-full rounded-md p-2 bg-transparent"
                name={"chatprompt"}
                maxLength={240}
                value={inputPrompt}
                onKeyDown={(event) => handleKeyPress(event)}
                onChange={(event) => setInputPrompt(event.target.value)}
                onFocus={() => scrollToBottom()}
              ></textarea>
            </form>
            <p className="text-xs italic opacity-60">Max 240 characters</p>
            <p className="text-xs text-red-800">{errors}</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default ChatWindow;
