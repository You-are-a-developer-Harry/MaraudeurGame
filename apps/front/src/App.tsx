import { Manager } from "socket.io-client";
import { useEffect } from "react";
import { config } from "./utils/config";

function App() {

  useEffect(() => {
    const manager = new Manager(config.apiBaseUrl);

    const socket = manager.socket("/")

    socket.on("message", (msg) => {
      console.log(msg)
    });
  }, [])
  return <p>Hello world</p>
}

export default App
