import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type PreferenceItemProps = {
  label: string;
};

export const PreferenceItem = ({ label }: PreferenceItemProps) => {
  const [name, setName] = useLocalStorage<string[]>("categories", []);

  const handleSwitch = (checked: boolean, category: string) => {
    if (checked) {
      setName([...name, category]);
    } else {
      setName(name.filter((a) => a !== category));
    }
    console.log(checked);
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
        onChange={(e) => handleSwitch(e.target.checked, label)}
      />
    </FormControl>
  );
};

export default PreferenceItem;
