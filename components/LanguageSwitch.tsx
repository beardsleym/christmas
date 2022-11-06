import { Button } from "@chakra-ui/button";
import NextLink from "next/link";
import { useRouter } from "next/router";
interface LanguageSwitchProps {}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({}) => {
  const { locale } = useRouter();

  return (
    <NextLink href="preferences" locale={locale === "en" ? "fr" : "en"}>
      <Button variant="link" color="white" position="fixed" top={30} right={30}>
        {locale === "en" ? "Français" : "English"}
      </Button>
    </NextLink>
  );
};
