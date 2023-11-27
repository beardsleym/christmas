import { useRef } from "react";
import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";
import { useLocalStorage } from "@mantine/hooks";
import { getEmoji } from "data/data";

type DayItemProps = {
  itemDay: Number;
  currentDay: Number;
};

type itemProps = {
  category?: string;
  text?: string;
  emoji?: string;
};

export const DayItem = ({ itemDay, currentDay }: DayItemProps) => {
  const router = useRouter();
  const [event] = useLocalStorage<itemProps>({
    key: `${itemDay}`,
  });
  const playerRef = useRef<Player>(null);
  const isLookedAt = !!localStorage.getItem(itemDay.toString());

  const emptyTree =
    "https://assets9.lottiefiles.com/packages/lf20_ktwecrhe.json";
  const filledTree =
    "https://assets9.lottiefiles.com/packages/lf20_kenffpot.json";
  const calendarTree =
    "https://assets1.lottiefiles.com/packages/lf20_kc6glnpx.json";

  const handleClick = () => {
    if (currentDay >= itemDay) router.push(`/${itemDay}`);
  };
  const animation = () => {
    switch (true) {
      case itemDay === 25:
        return calendarTree;
      case currentDay < itemDay:
        return emptyTree;
      case currentDay >= itemDay:
        return filledTree;
      case currentDay === itemDay:
        return filledTree;
      default:
        return filledTree;
    }
  };

  const isDisabled = () => {
    switch (true) {
      case currentDay > itemDay:
        return false;
      case currentDay < itemDay:
        return true;
      case currentDay === itemDay:
        return false;
      default:
        return false;
    }
  };

  const textAndBorderColor = () => {
    switch (true) {
      case isLookedAt:
        return "white";
      case currentDay > itemDay:
        return "gray.500";
      case currentDay < itemDay:
        return "gray.900";
      default:
        return "white";
    }
  };
  const cardBackgroundColor = () => {
    switch (true) {
      case isLookedAt:
        return "green.600";
      case currentDay > itemDay:
        return "gray.600";
      case currentDay < itemDay:
        return "red.400";
      default:
        return "green.600";
    }
  };

  return (
    <Flex
      onClick={handleClick}
      border="2px"
      alignItems="center"
      justifyContent="center"
      borderColor={textAndBorderColor()}
      borderRadius={16}
      pb={[1, 2]}
      flexDirection="column"
      backgroundColor={cardBackgroundColor()}
      minHeight="6rem"
      cursor={isDisabled() ? "not-allowed" : "pointer"}
    >
      <Box position="relative">
        <Box minHeight={"5rem"} style={{ aspectRatio: 1 / 1 }}>
          <Player
            src={animation()}
            className="player"
            keepLastFrame
            autoplay={currentDay === itemDay}
            loop
            ref={playerRef}
            style={{ opacity: currentDay > itemDay ? "50%" : "" }}
          />
        </Box>
        <Heading
          size={"xl"}
          lineHeight={0.8}
          color={textAndBorderColor()}
          textAlign="center"
        >
          {itemDay !== 25 ? itemDay.toString() : null}{" "}
        </Heading>
        {currentDay >= itemDay && event.category ? (
          <Text
            fontSize="xs"
            position="absolute"
            top={2}
            right={2}
            filter={currentDay === itemDay ? undefined : "grayscale(0.5)"}
          >
            {getEmoji(event.category)}
          </Text>
        ) : null}
      </Box>
    </Flex>
  );
};
