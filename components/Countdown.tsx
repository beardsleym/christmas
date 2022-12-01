import {
  CircularProgress,
  CircularProgressLabel,
  Center,
  Text,
} from "@chakra-ui/react";

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
    <CircularProgress
      value={(remainingDays / 365) * 100}
      color="gray.600"
      size="220px"
    >
      <CircularProgressLabel color="white">
        {remainingDays}
      </CircularProgressLabel>
    </CircularProgress>
    <Text mt={4} color="white" fontSize="2xl">
      day{remainingDays > 1 && "s"} till December
    </Text>
  </Center>
);
