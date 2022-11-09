import { useCallback, useEffect } from "react";
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
  const [categories] = useLocalStorage<string[]>({
    key: "categories",
    defaultValue: undefined,
  });
  const [, setMonth] = useLocalStorage<number>({
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
    setUsersCategories([]);
    toast({
      title: t("resetTitle"),
      description: t("resetBody"),
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [fillDays, toast, t, setUsersCategories]);

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

  return { clearData, fillDays, categories, setMonth };
};
