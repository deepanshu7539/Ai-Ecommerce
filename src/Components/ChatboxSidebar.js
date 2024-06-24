import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

const ChatboxSidebar = ({ toggleProductsWidth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    toggleProductsWidth(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const systemResponses = {
    cart: "You can view your shopping cart here.",
    login: "Please log into your account.",
    register: "Register a new account with us.",
    detail: "Here is your Black T-shirt",
    products: "Here are all the products.",
    history: "You can view your order history here.",
    status: "Check the status of your order here.",
    payment: "Make your payment here.",
    red: "Here is your Red T-shirt",
    default: "How can I assist you further?",
  };

  const commands = [
    { command: "cart", action: "cart" },
    { command: "login", action: "login" },
    { command: "register", action: "register" },
    { command: "black", action: "detail" },
    { command: "products", action: "products" },
    { command: "history", action: "history" },
    { command: "status", action: "status" },
    { command: "payment", action: "payment" },
    { command: "red", action: "red" },
  ];

  const parseUserInput = (input) => {
    const normalizedInput = input.trim().toLowerCase();
    const command = commands.find((cmd) =>
      normalizedInput.includes(cmd.command)
    );
    return command ? command.action : null;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = { text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");

      const command = parseUserInput(input);
      if (command) {
        navigate(`/${command}`);
      }

      const responseText =
        systemResponses[command] || systemResponses["default"];
      const systemResponse = { text: responseText, sender: "system" };

      setMessages((prevMessages) => [...prevMessages, systemResponse]);
    }
  };

  const handleInitialMessage = () => {
    if (isFirstOpen) {
      const initialMessage = {
        text: systemResponses["default"],
        sender: "system",
      };
      setMessages([initialMessage]);
      setIsFirstOpen(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      handleInitialMessage();
    }
  }, [isOpen]);

  useEffect(() => {
    handleInitialMessage();
  }, [location.pathname]);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed ${
          isOpen ? "top-2" : "bottom-5"
        } right-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-2 rounded-md shadow-lg focus:outline-none z-[100]`}
      >
        {isOpen ? (
          <XCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
        ) : (
          "Open Chat"
        )}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Chatbox</h2>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`py-2 px-4 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-100 text-right"
                      : "bg-gray-100 text-left"
                  }`}
                >
                  {message.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-r-md focus:outline-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatboxSidebar;
