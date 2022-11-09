import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { useToast } from "@chakra-ui/react";
import { useLocalStorage } from "@mantine/hooks";

export const usePreferences = () => {
  const toast = useToast();
  const t = useTranslations("Preferences");

  const [, setArray] = useLocalStorage<Number[]>({
    key: "daysArray",
    defaultValue: undefined,
  });
  const [, setUsersCategories] = useLocalStorage<string[]>({
    key: "categories",
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
    setUsersCategories([]);
    toast({
      title: t("resetTitle"),
      description: t("resetBody"),
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [fillDays, toast, t, setUsersCategories]);

  return { clearData, fillDays };
};
