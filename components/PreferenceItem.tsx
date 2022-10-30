import { useState } from "react";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useLocalStorage } from "@mantine/hooks";
import { categories } from "../constants/data";

type PreferenceItemProps = {
  label: string;
};

export const PreferenceItem = ({ label }: PreferenceItemProps) => {
  const [value, setValue] = useLocalStorage<string[]>({
    key: "categories",
    defaultValue: [],
  });

  const handleSwitch = (checked: boolean, category: string) => {
    if (checked) {
      setValue(() => [...value, category]);
    } else {
      const newCategories = value.filter((val) => val !== category);
      setValue(newCategories);
    }
  };

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        {label}
      </FormLabel>
      <Switch
        id={`${label}`}
        colorScheme="primary"
        size="lg"
        ml="auto"
        isChecked={value.includes(label)}
        onChange={(e) => handleSwitch(e.target.checked, label)}
      />
    </FormControl>
  );
};

export default PreferenceItem;
