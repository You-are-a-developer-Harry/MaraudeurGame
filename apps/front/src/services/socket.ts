import { Manager } from "socket.io-client";
import { config } from "@utils/config";

const manager = new Manager(config.apiBaseUrl)

export const socket = manager.socket('/')
