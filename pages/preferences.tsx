import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Button, IconButton, useToast } from "@chakra-ui/react";
import { Main } from "../components/Main";
import { PreferencesCard } from "../components/PreferencesCard";
import { Header } from "../components/Header";
import { useLocalStorage } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
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
  const [month, setMonth] = useLocalStorage<number>({
    key: "currentMonth",
    defaultValue: undefined,
  });
  const fillDays = useCallback(() => {
    const arr: Number[] = Array.from({ length: 25 }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5
    );
    setArray(arr);
  }, [setArray]);

  const clearData = useCallback(() => {
    localStorage.clear();
    fillDays();
    toast({
      title: "Info Cleared",
      description: "We have cleared your information for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [fillDays, toast]);

  useEffect(() => {
    const d = new Date();
    const currentMonth = d.getMonth();
    if (localStorage.getItem("daysArray") === null) {
      fillDays();
    }
    if (localStorage.getItem("currentMonth") === null) {
      setMonth(currentMonth);
    } else if (localStorage.getItem("currentMonth") !== `${currentMonth}`) {
      clearData();
    }
  }, [fillDays, setMonth, clearData]);

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
          disabled={value.length < 3}
        >
          {value.length > 2 ? "Save" : `Select ${3 - value.length} more`}
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
