import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiveStars } from "./FiveStars";

interface Props {
  level: number;
  name: string;
  children: string;
  profession: string;
  picture: string;
}

export function FeedBackUser({
  level,
  name,
  children,
  profession,
  picture,
}: Props) {
  return (
    <VStack bgColor="white" alignItems="center" w="100%" h="100%" p="10">
      <Flex justifyContent="center" alignItems="center">
        <Avatar w="16" h="16" name={name} src={picture} mr="3" />
        <Box>
          <Text
            color="#8D5CF6"
            fontWeight="700"
            fontSize="14px"
            lineHeight="24px"
          >
            {name}
          </Text>
          <Text
            color="#252B42"
            fontWeight="400"
            fontSize="12px"
            lineHeight="16px"
            letterSpacing="0.2"
          >
            {profession}
          </Text>
        </Box>
      </Flex>
      <VStack w="100%" alignItems="center" px="10">
        <FiveStars level={level} />

        <Text
          px="3"
          textAlign="center"
          w="100%"
          fontWeight="400"
          fontSize="14px"
          lineHeight="20px"
          letterSpacing="0.2px"
          color="#737373"
        >
          {children}
        </Text>
      </VStack>
    </VStack>
  );
}
