import { useState } from "react";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useLocalStorage } from "@mantine/hooks";

type PreferenceItemProps = {
  label: string;
};

export const PreferenceItem = ({ label }: PreferenceItemProps) => {
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
        {label}
      </FormLabel>
      <Switch
        id={`${label}`}
        colorScheme="primary"
        size="lg"
        ml="auto"
        isChecked={usersCategories.includes(label)}
        onChange={(e) => handleSwitch(e.target.checked, label)}
      />
    </FormControl>
  );
};

export default PreferenceItem;
