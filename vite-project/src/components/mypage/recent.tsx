import { Button } from "@chakra-ui/react";
import { Box, Flex, Text, Center } from "@chakra-ui/layout";
import { Avatar, List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Recent() {
    const navigate = useNavigate()

    return ()
}

function Card(props) {
    console.log(props)
    return (
      <div>
        <Link to={"/detail/" + (props.i)}>
        <img src={process.env.PUBLIC_URL + "/shop" + (props.i+1) + ".jpg"} width="80%" alt="상품 이미지" /></Link>
          <h4>{props.products.title}</h4>
          <p>{props.products.price}</p>
      </div>
    )
  }