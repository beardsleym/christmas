import { Center, IconButton, HStack } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

type itemProps = {
  category?: string;
  text?: string;
};

interface SkipsProps {
  skipItem: () => void;
  skippedItems: itemProps[] | undefined;
}

export const Skips: React.FC<SkipsProps> = ({ skipItem, skippedItems }) => (
  <Center pt={16}>
    <HStack>
      {Array.from(Array(5 - (skippedItems?.length || 0)).keys()).map((item) => (
        <IconButton
          key={item}
          aria-label="repeat"
          icon={<RepeatIcon key={item} h={8} w={8} color="white" />}
          colorScheme="ghost"
          onClick={skipItem}
        />
      ))}
      {Array.from(Array(skippedItems?.length || 0).keys()).map((item) => (
        <IconButton
          key={item}
          aria-label="repeat"
          icon={<RepeatIcon key={item} h={8} w={8} color="gray.600" />}
          colorScheme="ghost"
          disabled
        />
      ))}
    </HStack>
  </Center>
);
