import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import dummylivelist from "../item/dummylist/dummylivelist";
import LiveListComponent from "./LiveListComponent";

export default function LiveCarouselComponent() {
    const [{ x }, setPosition] = useState({
        x: 0,
    });

    return (
        <Box display={"block"} overflowX={"hidden"} w={"80%"} mt={"1rem"} mb={"1rem"}>
            <Flex
                wrap={"nowrap"}
                direction={"row"}
                m={"auto"}
                overflowX={"hidden"}
                overflowY={"auto"}
                w={`${16 * dummylivelist.length}vw`}
                style={{ transform: `translateX(${x}px)` }}
                onMouseDown={(clickEvent: React.MouseEvent<Element, MouseEvent>) => {
                    const mouseMoveHandler = (moveEvent: MouseEvent) => {

                        const deltaX = moveEvent.screenX - clickEvent.screenX;

                        setPosition({
                            x: x + deltaX,
                        });
                    };

                    const mouseUpHandler = () => {
                        document.removeEventListener('mousemove', mouseMoveHandler);
                    };

                    document.addEventListener('mousemove', mouseMoveHandler);
                    document.addEventListener('mouseup', mouseUpHandler, { once: true });
                }}

            >
                {dummylivelist.map((data) => (
                    <Box key={data.id} w="calc(10.33%)" pointerEvents={"none"}>
                        <LiveListComponent
                            id={data.id}
                            url={data.img}
                            title={data.title}
                            price={data.price}
                        />
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}