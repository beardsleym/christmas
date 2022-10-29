import Head from "next/head";
import {
  Box,
  Image,
  Container,
  Stack,
  Center,
  Heading,
  Button,
} from "@chakra-ui/react";
import { PreferencesCard } from "../components/PreferencesCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="christmas advent calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container h="2xl">
        <Center h="full">
          <Stack spacing={4}>
            <Center>
              <Image
                src="/images/ChristmasTree.svg"
                alt="christmas-tree"
                boxSize="32"
              />
            </Center>
            <Heading
              as="h1"
              size="lg"
              noOfLines={1}
              color="white"
              textAlign={"center"}
            >
              Preferences
            </Heading>
            <PreferencesCard />
            <Button backgroundColor={"gray.600"} color="white" size="lg">
              Save
            </Button>
          </Stack>
        </Center>
        <Image
          src="/images/Presents.svg"
          alt="presents"
          boxSize={"80"}
          position="fixed"
          bottom={0}
          right={0}
          zIndex={-1}
        />
      </Container>
    </div>
  );
}
