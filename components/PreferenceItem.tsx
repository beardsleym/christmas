import { useRouter } from "next/router";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useLocalStorage } from "@mantine/hooks";
import { categoryProps } from "../constants/data";

type PreferenceItemProps = {
  category: categoryProps;
};

export const PreferenceItem = ({ category }: PreferenceItemProps) => {
  const { locale } = useRouter();
  const [usersCategories, setUsersCategories] = useLocalStorage<string[]>({
    key: "categories",
    defaultValue: undefined,
  });

  const handleSwitch = (checked: boolean, switchCategory: string) => {
    if (checked) {
      setUsersCategories(() => [...usersCategories, switchCategory]);
    } else {
      const newCategories = usersCategories.filter(
        (val) => val !== switchCategory
      );
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
