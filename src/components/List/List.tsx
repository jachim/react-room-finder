import React from 'react';
import { Box } from "@chakra-ui/core";
import Card from "../Card/Card";
import {RoomItem} from "../../model/RoomItem";

interface Props {
  data: RoomItem[]
}

const List: React.FC<Props> = (props: Props) => {
  return (
    <Box
      px={{ xl: 20 }}
      display={{ base: "flex", xl: "grid" }}
      justifyContent={{ base: "center", xl: "start" }}
      flexWrap="wrap"
      gridTemplateColumns="480px 1fr"
      w={{ xl: "100%" }}
      justifyItems="start"
    >
      {props.data.map((item, i) =>
        <Card key={i} {...item} />
      )}
    </Box>)
}

export default List