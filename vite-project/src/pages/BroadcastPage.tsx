// Broadcast.js
import { Flex } from "@chakra-ui/layout";
import Header from "../components/broadcast/Header"
import BroadcastScreen from "../components/broadcast/Screen";
import Chat from "../components/broadcast//Chat";
import Menu from "../components/broadcast//Menu";

function Broadcast() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex flex="1" overflow="hidden">
        <BroadcastScreen />
        <Chat />
        <Menu />
      </Flex>
    </Flex>
  );
}

export default Broadcast;
