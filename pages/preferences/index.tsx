import Head from "next/head";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
import { Main } from "../../components/Main";
import { PreferencesCard } from "../../components/PreferencesCard";
import { Header } from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
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
