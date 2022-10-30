import { Center, Stack, Box } from "@chakra-ui/react";
import PreferenceItem from "./PreferenceItem";
import { categories } from "../constants/data";

export const PreferencesCard = () => {
  return (
    <Center bg="white" boxShadow="base" rounded={"md"}>
      <Stack spacing={2} py={8} px={16}>
        {categories.map((category) => (
          <PreferenceItem label={category} key={category} />
        ))}
      </Stack>
    </Center>
  );
};
