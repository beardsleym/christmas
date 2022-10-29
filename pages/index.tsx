import Head from "next/head";
import { Container, Text, VStack } from "@chakra-ui/react";
import { DayItem } from "../components/DayItem";

export default function Home() {
  return (
    <div>
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
              <DayItem key={i} />
            ))}
        </VStack>
      </Container>
    </div>
  );
}
