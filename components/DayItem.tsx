import { useRef } from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";

type DayItemProps = {
  itemDay: Number;
  currentDay: Number;
};

export const DayItem = ({ itemDay, currentDay }: DayItemProps) => {
  const router = useRouter();
  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: "24",
    textAlign: "center",
    height: "100%",
    minHeight: 320,
    // minWidth: 320,
    // width: "264px",
    // background: `url(images/${
    //   itemDay === 25 ? "Special" : ""
    // }House.svg) center/cover no-repeat`,
  };
  const playerRef = useRef<Player>(null);

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

  return (
    <Flex
      onClick={handleClick}
      sx={basicBoxStyles}
      border="4px"
      borderColor="black"
      borderRadius={16}
      pb={4}
      filter={currentDay > itemDay ? "grayscale(1)" : ""}
      flexDirection="column"
    >
      <Player
        src={animation()}
        className="player"
        keepLastFrame
        autoplay={currentDay === itemDay}
        loop
        ref={playerRef}
        style={{ opacity: currentDay > itemDay ? "50%" : "" }}
      />
      <Heading
        size={"2xl"}
        color="white"
        textShadow={itemDay === 25 ? "#000 1px 0 30px" : ""}
      >
        {itemDay !== 25 ? itemDay.toString() : null}
      </Heading>
      {/* <Box
          sx={basicBoxStyles}
          opacity={currentDay !== itemDay ? "30%" : "100%"}
        >
          <Heading
            pr={4}
            size={"4xl"}
            color="white"
            textShadow={itemDay === 25 ? "#000 1px 0 30px" : ""}
          >
            {itemDay.toString()}
          </Heading>
        </Box> */}
    </Flex>
  );
};
