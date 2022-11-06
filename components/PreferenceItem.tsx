import { useState } from "react";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useLocalStorage } from "@mantine/hooks";
import { categoryProps } from "../constants/data";
import { useRouter } from "next/router";

type PreferenceItemProps = {
  category: categoryProps;
};

export const PreferenceItem = ({ category }: PreferenceItemProps) => {
  const { locale } = useRouter();
  const [usersCategories, setUsersCategories] = useLocalStorage<string[]>({
    key: "categories",
    defaultValue: undefined,
  });

  const handleSwitch = (checked: boolean, category: string) => {
    if (checked) {
      setUsersCategories(() => [...usersCategories, category]);
    } else {
      const newCategories = usersCategories.filter((val) => val !== category);
      setUsersCategories(newCategories);
    }
  };

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="preference-item" mb="0">
        {category[locale ?? "en"]}
      </FormLabel>
      <Switch
        id={`${category.en}`}
        colorScheme="primary"
        size="lg"
        ml="auto"
        isChecked={usersCategories.includes(category.en)}
        onChange={(e) => handleSwitch(e.target.checked, category.en)}
      />
    </FormControl>
  );
};

export default PreferenceItem;
