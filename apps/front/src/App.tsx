import { Manager } from "socket.io-client";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const manager = new Manager("http://localhost:5000");

    const socket = manager.socket("/")

    socket.on("message", (msg) => {
      console.log(msg)
    });
  })
  return <p>Hello world</p>
}

export default App
