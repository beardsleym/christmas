import {
  Image,
  Container,
  Stack,
  Center,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type MainProps = {
  title?: String;
  children: ReactNode;
};

export const Main = ({ title, children }: MainProps) => {
  return (
    <Container h="2xl">
      <Center h="full">
        <Stack spacing={4}>
          <Center>
            <Image
              src="/images/ChristmasTree.svg"
              alt="christmas-tree"
              boxSize="32"
            />
          </Center>
          <Heading
            as="h1"
            size="lg"
            noOfLines={1}
            color="white"
            textAlign={"center"}
          >
            {title}
          </Heading>
          {children}
        </Stack>
      </Center>
      <Image
        src="/images/Presents.svg"
        alt="presents"
        boxSize={"80"}
        position="fixed"
        bottom={0}
        right={0}
        zIndex={-1}
      />
    </Container>
  );
};
