import NextLink from "next/link";
import { Center, Heading, Box } from "@chakra-ui/react";

type DayItemProps = {
  itemDay: Number;
  currentDay: Number;
};

export const DayItem = ({ itemDay, currentDay }: DayItemProps) => {
  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "24",
    textAlign: "center",
    height: "250px",
    width: "264px",
    background: `url(images/${
      itemDay === 25 ? "Special" : ""
    }House.svg) center/cover no-repeat`,
  };
  return (
    <NextLink href={currentDay < itemDay ? "" : `/${itemDay}`} scroll={false}>
      <Center>
        <Box
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
        </Box>
      </Center>
    </NextLink>
  );
};
