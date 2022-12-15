import { Center, Stack } from "@chakra-ui/react";
import PreferenceItem from "./PreferenceItem";
import { categories } from "data/data";

export const PreferencesCard = () => (
  <Center bg="white" boxShadow="base" rounded={"md"}>
    <Stack spacing={2} py={8}>
      {categories.map((category) => (
        <PreferenceItem category={category} key={category.en} />
      ))}
    </Stack>
  </Center>
);
