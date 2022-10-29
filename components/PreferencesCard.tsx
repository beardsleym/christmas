import { Center, Stack, Box } from "@chakra-ui/react";
import PreferenceItem from "./PreferenceItem";

export const PreferencesCard = () => {
  return (
    <Center bg="white" boxShadow="base" rounded={"md"}>
      <Stack spacing={8} py={8} px={16}>
        <PreferenceItem label={"Movies"} />
        <PreferenceItem label={"Cooking"} />
        <PreferenceItem label={"Activities"} />
        <PreferenceItem label={"Other"} />
      </Stack>
    </Center>
  );
};
