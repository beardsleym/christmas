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
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next/types";

export default function Home() {
  const router = useRouter();
  const toast = useToast();
  const t = useTranslations("Preferences");
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
      title: t("resetTitle"),
      description: t("resetBody"),
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [fillDays, toast, t]);

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
      <Main title={t("title")}>
        <PreferencesCard />
        <Button
          onClick={() => router.push("/")}
          backgroundColor={"gray.600"}
          color="white"
          _hover={{ backgroundColor: "gray.300", color: "gray.600" }}
          size="lg"
          disabled={value.length < 3}
        >
          {value.length > 2
            ? t("save")
            : `${t("select")} ${3 - value.length} ${t("more")}${
                3 - value.length > 1 && router.locale === "fr" ? "es" : ""
              }
              `}
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
