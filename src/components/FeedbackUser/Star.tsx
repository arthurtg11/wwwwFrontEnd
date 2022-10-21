import { Icon } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type props = {
  isEnable?: boolean;
};

export function Star({ isEnable }: props) {
  return (
    <Icon
      ml="3"
      w={5}
      h={5}
      as={isEnable ? AiFillStar : AiOutlineStar}
      color="#F3CD04"
    />
  );
}
