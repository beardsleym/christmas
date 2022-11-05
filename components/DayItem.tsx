import NextLink from "next/link";
import { Image, Center, Heading, Box, Text } from "@chakra-ui/react";

type DayItemProps = {
  id: Number;
  disabled: boolean;
};

const basicBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "24",
  textAlign: "center",
  height: "250px",
  width: "264px",
  background: "url(images/House.svg) center/cover no-repeat",
};

export const DayItem = ({ id, disabled }: DayItemProps) => {
  return (
    <NextLink href={disabled ? "" : `/${id}`} scroll={false}>
      <Center>
        <Box sx={basicBoxStyles} opacity={disabled ? "30%" : "100%"}>
          <Heading pr={4} size={"4xl"} color="white">
            {id.toString()}
          </Heading>
        </Box>
      </Center>
    </NextLink>
  );
};
