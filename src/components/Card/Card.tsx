import { Badge, Box, Image, Text } from '@chakra-ui/core';
import React from 'react';
import { BsPeople } from "react-icons/bs";
import { FaBed } from "react-icons/fa"
import {RoomItem} from "../../model/RoomItem";

interface IProps extends RoomItem { }

const Card: React.FC<IProps> = (props: IProps) => {
  const alternate: string = `Product Image ID: ${props.id}`
  return (
    <>
      <Box maxW="lg" borderWidth="1px" rounded="lg" overflow="hidden" m={{ base: 6, sm: 2, xs: 2 }} float={{ base: "none", xl: "left" }} fontFamily="Nunito">
        <Image src={props.image} alt={alternate} />
        <Box p={6}>
          <Box d="flex" alignItems={{ base: "baseline" }} justifyContent={{ xl: "center" }}>
            <Badge rounded="full" px={2} variantColor="teal">
              {props.roomType}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="bold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml={2}
            >
              {props.bedroomsCount ? props.bedroomsCount > 1 ? `${props.bedroomsCount} bedrooms` : `${props.bedroomsCount} bedroom` : `Brak informacji`}
              {props.singleBedsCount > 0 && ` • ${props.singleBedsCount} single bed `}
              {props.doubleBedsCount > 0 && ` • ${props.doubleBedsCount} double bed`}
            </Box>
          </Box>
          <Box d={{ base: "flex", xl: "none" }} mt={1} fontWeight="bold" as="h4" lineHeight="tight" isTruncated>
            {props.name}
          </Box>
          <Box d={{ base: "flex", xl: "none" }}>
            {new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(props.totalPrice)}
            <Box as="span" color="gray.600" fontSize="sm" alignSelf="center">
              / 24h
          </Box>
          </Box>
        </Box>
      </Box>
      <Box p={6} d={{ base: "none", xl: "inline-block" }} float="left" mt={6}>
        <Box d="flex">
          <Badge fontSize="md" rounded="full" px={4} variantColor="teal" lineHeight="2rem" mr={2}>
            {props.roomType}
          </Badge>
          <Badge fontSize="md" rounded="full" px={4} variantColor="green" lineHeight="2rem" mr={2}>
            <Box as={BsPeople} d="inline-block" size="2rem" /> {props.maxNbGuests}
          </Badge>
          <Text fontSize="2xl" fontWeight="bold">{props.name}</Text>
        </Box>
        <Box py={4}>
          <Text >Cena: </Text>
          <Text fontSize="xl" fontWeight="700">{new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(props.totalPrice)}
            <Box as="span" color="gray.600" fontSize="md" fontWeight="normal">
              / 24h
          </Box>
          </Text>
        </Box>
        <Box>
          <Box d="flex">
            <Box as={FaBed} d="inline-block" size="3rem" mr={4} />
            <Box d="inline-block" alignItems="center">
              <Text>
                {props.bedroomsCount ? props.bedroomsCount > 1 ? `${props.bedroomsCount} sypialnie` : `${props.bedroomsCount} sypialnia` : `Brak informacji`}
              </Text>
              <Text>{props.singleBedsCount ? props.singleBedsCount > 1 ? `${props.singleBedsCount} pojedyncze łóżka` : `${props.singleBedsCount} pojedyncze łóżko` : null}</Text>
              <Text>{props.doubleBedsCount ? props.doubleBedsCount > 1 ? `${props.doubleBedsCount} podwójne łóżka` : `${props.doubleBedsCount} podwójne łóżko` : null}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>)
}

export default Card
