import Head from "next/head";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
import { Main } from "../../components/Main";
import { PreferencesCard } from "../../components/PreferencesCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="christmas advent calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main title={"Preferences"}>
        <PreferencesCard />
        <Button
          as={NextLink}
          backgroundColor={"gray.600"}
          color="white"
          size="lg"
          href="/"
        >
          Save
        </Button>
      </Main>
    </>
  );
}
