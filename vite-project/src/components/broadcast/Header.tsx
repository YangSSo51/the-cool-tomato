import { TimeIcon, ViewIcon, CheckIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout';
import { FaWifi } from "react-icons/fa";

import ProfileBuyerComponent from '../common/navcomponent/NavBuyerProfileComponent';

const iconData = [
    { icon: <TimeIcon />, content: '2h 30m' },
    { icon: <ViewIcon />, content: '1.2k viewers' },
    { icon: <CheckIcon />, content: 'Sales completed' },
    { icon: <FaWifi />, content: 'Good bitrate' },
  ];

function Header() {
  return (
    <Flex bg="themeLightGreen.500" justify='space-between' p="1rem" h="3rem" alignItems="center">
        <Flex fontFamily="GmkBold">
          <Text>므째이터마터</Text>
        </Flex>

        <Flex>
        {iconData.map((item, index) => (
          <Flex key={index} alignItems="center" marginRight="0.5rem">
            {item.icon}
            <Text marginLeft="0.3rem">{item.content}</Text>
          </Flex>
        ))}
        </Flex>

        <ProfileBuyerComponent />
    </Flex>
  );
}

export default Header;
