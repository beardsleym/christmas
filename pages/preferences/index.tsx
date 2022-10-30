import Head from "next/head";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
import { Main } from "../../components/Main";
import { PreferencesCard } from "../../components/PreferencesCard";
import { Header } from "../../components/Header";
import { useLocalStorage } from "@mantine/hooks";

export default function Home() {
  const [value, setValue] = useLocalStorage<string[]>({
    key: "categories",
    defaultValue: [],
  });
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
          disabled={!value.length}
        >
          Save
        </Button>
      </Main>
    </>
  );
}
