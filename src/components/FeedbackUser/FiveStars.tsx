import {
  Box,
  Flex,
  HStack,
  LinkProps as ChackraLinkProps,
} from "@chakra-ui/react";
import { Star } from "./Star";

interface Props {
  level: number;
}

export function FiveStars({ level }: Props) {
  function fillStars(value) {
    const rows = [];
    for (let i = 0; i < 5; i++) {
      if (i < value) {
        rows.push(<Star isEnable />);
      } else {
        rows.push(<Star />);
      }
    }
    return rows;
  }
  return (
    <Box ml="2" w="100%" justifyContent="center">
      {fillStars(level).map((i) => i)}
    </Box>
  );
}
