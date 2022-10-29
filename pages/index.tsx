import Head from "next/head";
import NextLink from "next/link";
import { Container, IconButton, VStack } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { DayItem } from "../components/DayItem";
import { Info } from "../components/Info";

export default function Home() {
  return (
    <>
      <Head>
        <title>Christmas Advent Calendar</title>
        <meta name="description" content="christmas advent calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container h="2xl">
        <VStack gap={8} mt={8}>
          {Array(25)
            .fill("")
            .map((_, i) => (
              <DayItem key={i} id={"1"} />
            ))}
        </VStack>
      </Container>
      <IconButton
        as={NextLink}
        href="/preferences"
        aria-label="preferences"
        icon={<SettingsIcon w={8} h={8} />}
        position="fixed"
        bottom="30"
        left="30"
        colorScheme="transparent"
      />
      <Info />
    </>
  );
}
