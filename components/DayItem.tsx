import NextLink from "next/link";
import { Image, Center, Heading, Box, Text } from "@chakra-ui/react";

type DayItemProps = {
  id: Number;
  disabled: boolean;
};

export const DayItem = ({ id, disabled }: DayItemProps) => {
  return (
    <NextLink href={disabled ? "" : `/${id}`} scroll={false}>
      <Box position={"relative"}>
        <Center>
          <Heading
            size={"4xl"}
            color={disabled ? "whiteAlpha.500" : "white"}
            position={"absolute"}
            top={"64%"}
            left={"39%"}
            textAlign="center"
          >
            {id.toString()}
          </Heading>
        </Center>
        <Image
          src="images/House.svg"
          alt="house"
          opacity={disabled ? "30%" : "100%"}
        />
      </Box>
    </NextLink>
  );
};
