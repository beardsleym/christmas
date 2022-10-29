import { Image, Center, Heading, Box } from "@chakra-ui/react";

export const DayItem: React.FC = () => {
  return (
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
  );
};
