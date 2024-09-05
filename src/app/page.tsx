"use client";

import { socket } from "@/services/websockets";
import { useEffect, useState } from "react";

export default function Home() {
  const [messages, sendMessage] = useState<any[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const findChatAndDepartments = async () => {
      socket.on("events", (msg) => {
        sendMessage((prev) => [...prev, msg]);
      });
    };

    findChatAndDepartments();
    return () => {
      socket.off("events");
    };
  }, []);

  return (
    <div>
      <h1>WebSocket with Next.js</h1>
      <input
        style={{ color: "black" }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          sendMessage((prev) => [...prev, input]);
          socket.emit("events", input);
        }}
      >
        Send
      </button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
