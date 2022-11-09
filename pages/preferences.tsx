import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next/types";
import { DeleteIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import { useLocalStorage } from "@mantine/hooks";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { usePreferences } from "../hooks/usePreferences";
import { LanguageSwitch } from "../components/LanguageSwitch";
import { PreferencesCard } from "../components/PreferencesCard";

export default function Home() {
  const { clearData, fillDays } = usePreferences();
  const router = useRouter();
  const t = useTranslations("Preferences");
  const [categories] = useLocalStorage<string[]>({
    key: "categories",
    defaultValue: undefined,
  });
  const [, setMonth] = useLocalStorage<number>({
    key: "currentMonth",
    defaultValue: undefined,
  });
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
          disabled={categories.length < 3}
        >
          {categories.length > 2
            ? t("save")
            : `${t("select")} ${3 - categories.length} ${t("more")}${
                3 - categories.length > 1 && router.locale === "fr" ? "es" : ""
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
      <LanguageSwitch />
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
