import NextLink from "next/link";
import { Image, Center, Heading, Box } from "@chakra-ui/react";

type DayItemProps = {
  id: String;
};

export const DayItem = ({ id }: DayItemProps) => {
  return (
    <NextLink href={`/${id}`}>
      <Box position={"relative"}>
        <Center>
          <Heading
            size={"4xl"}
            color="white"
            position={"absolute"}
            top={"64%"}
            left={"39%"}
            textAlign="center"
          >
            1
          </Heading>
        </Center>
        <Image src="/images/House.svg" alt="house" />
      </Box>
    </NextLink>
  );
};
