import { Center, Text, Heading, Box } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslations } from "next-intl";

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

export const Countdown = () => {
  const t = useTranslations("Countdown");

  return (
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
        {t("day")}
        {remainingDays > 1 && "s"} {t("december")}
      </Text>
      <Text mt={4} color="white" fontSize="md">
        {t("body")}
      </Text>
    </Center>
  );
};
