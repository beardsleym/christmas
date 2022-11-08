import { Center, Stack } from "@chakra-ui/react";
import { categories } from "../constants/data";
import PreferenceItem from "./PreferenceItem";

export const PreferencesCard = () => (
  <Center bg="white" boxShadow="base" rounded={"md"}>
    <Stack spacing={2} py={8}>
      {categories.map((category) => (
        <PreferenceItem category={category} key={category.en} />
      ))}
    </Stack>
  </Center>
);
