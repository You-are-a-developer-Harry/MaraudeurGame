import { Manager } from "socket.io-client";
import { useEffect } from "react";
import { config } from "./utils/config";
import { Game } from "./game/Game";
import { Dice } from "./game/components/Dice"
import { DiceBtn } from "./components/DiceBtn/index";

function App() {

  useEffect(() => {
    //const manager = new Manager(config.apiBaseUrl);

    // const socket = manager.socket("/")

    // socket.on("message", (msg) => {
    //   console.log(msg)
    // });
  }, [])

  useEffect(() => {
   
  }, [])


  return <> <Game/> <DiceBtn/></>
}

export default App
