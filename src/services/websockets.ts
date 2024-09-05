import { io } from "socket.io-client";

export const socket = io("http://localhost:3502", { path: "/socket.io" });
