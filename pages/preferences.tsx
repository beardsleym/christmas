import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Button, IconButton, useToast } from "@chakra-ui/react";
import { Main } from "../components/Main";
import { PreferencesCard } from "../components/PreferencesCard";
import { Header } from "../components/Header";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function Home() {
  const router = useRouter();
  const toast = useToast();
  const [value, setValue] = useLocalStorage<string[]>({
    key: "categories",
    defaultValue: undefined,
  });
  const [array, setArray] = useLocalStorage<Number[]>({
    key: "daysArray",
    defaultValue: undefined,
  });

  const clearData = () => {
    localStorage.clear();
    toast({
      title: "Info Cleared",
      description: "We have cleared your information for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("daysArray") === null) {
      const arr: Number[] = Array.from({ length: 31 }, (_, i) => i + 1).sort(
        () => Math.random() - 0.5
      );
      setArray(arr);
    }
  }, [setArray]);

  return (
    <>
      <Header />
      <Main title={"Preferences"}>
        <PreferencesCard />
        <Button
          onClick={() => router.push("/")}
          backgroundColor={"gray.600"}
          color="white"
          _hover={{ backgroundColor: "gray.300", color: "gray.600" }}
          size="lg"
          disabled={!value.length}
        >
          Save
        </Button>
      </Main>
      <IconButton
        aria-label="clear"
        icon={<DeleteIcon w={8} h={8} />}
        position="fixed"
        bottom="30"
        left="30"
        colorScheme="transparent"
        onClick={clearData}
      />
    </>
  );
}
