import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

type PreferenceItemProps = {
  label: String;
};

export const PreferenceItem = ({ label }: PreferenceItemProps) => {
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        {label}
      </FormLabel>
      <Switch id={`${label}`} colorScheme="primary" size="lg" ml="auto" />
    </FormControl>
  );
};

export default PreferenceItem;
