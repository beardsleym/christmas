import { Center, Stack } from "@chakra-ui/react";
import { categories } from "../constants/data";
import PreferenceItem from "./PreferenceItem";

type PreferenceCardProps = {
  handleSwitch: Function;
};

export const PreferencesCard = ({ handleSwitch }: PreferenceCardProps) => (
  <Center bg="white" boxShadow="base" rounded={"md"}>
    <Stack spacing={2} py={8}>
      {categories.map((category) => (
        <PreferenceItem
          category={category}
          key={category.en}
          handleSwitch={handleSwitch}
        />
      ))}
    </Stack>
  </Center>
);
