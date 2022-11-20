import { Center, Text, Heading, Box } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

let today = new Date();
let christmasYear = today.getFullYear();

if (today.getMonth() == 11 && today.getDate() > 1) {
  christmasYear = christmasYear + 1;
}

let christmasDate = new Date(christmasYear, 11, 1);
let dayMilliseconds = 1000 * 60 * 60 * 24;

let remainingDays = Math.ceil(
  (christmasDate.getTime() - today.getTime()) / dayMilliseconds
);

export const Countdown: React.FC = () => (
  <Center h="100vh" flexDirection="column">
    <Box position="relative" textAlign="center">
      <Player
        src="https://assets3.lottiefiles.com/packages/lf20_i7y3y8fi.json"
        className="player"
        autoplay
        loop
        style={{ height: "256px", width: "256px" }}
      />
      <Heading
        mt={4}
        color="white"
        fontSize="2xl"
        position="absolute"
        top="34%"
        right="46%"
      >
        {remainingDays}
      </Heading>
    </Box>
    <Text mt={4} color="white" fontSize="2xl">
      Day{remainingDays > 1 && "s"} till December
    </Text>
    <Text mt={4} color="white" fontSize="md">
      We&apos;ll be waiting for you here.
    </Text>
  </Center>
);
