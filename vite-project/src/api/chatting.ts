import { Client, IStompSocket } from "@stomp/stompjs";
import { chatSocket } from "./http";

function getStompClient(accessToken: string) {
    const socket = chatSocket();
    const client = new Client();

    client.configure({
        connectHeaders: {
            Authorization: "Bearer " + accessToken,
        },
    });

    return { stomp: client, sock: socket };
}

export { getStompClient };
