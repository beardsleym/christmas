import { useRef } from "react";
import NextLink from "next/link";
import { Heading, Box } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

type DayItemProps = {
  itemDay: Number;
  currentDay: Number;
};

export const DayItem = ({ itemDay, currentDay }: DayItemProps) => {
  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: "24",
    textAlign: "center",
    // height: "250px",
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
    <NextLink href={currentDay < itemDay ? "" : `/${itemDay}`} scroll={false}>
      <Box
        sx={basicBoxStyles}
        border="4px"
        borderColor="black"
        borderRadius={16}
        padding={4}
        filter={currentDay > itemDay ? "grayscale(1)" : ""}
      >
        <Player
          src={animation()}
          className="player"
          keepLastFrame
          autoplay={currentDay === itemDay}
          loop
          ref={playerRef}
          style={{ opacity: currentDay > itemDay ? "50%" : "" }}
        >
          <Heading
            size={"2xl"}
            color="white"
            textShadow={itemDay === 25 ? "#000 1px 0 30px" : ""}
          >
            {itemDay !== 25 ? itemDay.toString() : null}
          </Heading>
        </Player>
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
      </Box>
    </NextLink>
  );
};
