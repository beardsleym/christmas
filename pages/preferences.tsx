export const runtime = "edge";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next/types";
import { DeleteIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import { Title } from "components/Title";
import { Header } from "components/Header";
import {
  usePreferences,
  LanguageSwitch,
  PreferencesCard,
} from "features/preferences";

export default function Home() {
  const router = useRouter();
  const { clearData, categories } = usePreferences();
  const t = useTranslations("Preferences");

  return (
    <>
      <Header />
      <Title title={t("title")}>
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
      </Title>
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
      messages: (await import(`features/i18n/messages/${locale}.json`)).default,
    },
  };
}
