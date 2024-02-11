import Stomp from "stompjs";
import { chatSocket } from "./http";

function getStompClient() {
    const socket = chatSocket();
    console.log("getStompClient socket");
    console.log(socket);
    return Stomp.over(socket);
}

export { getStompClient };
