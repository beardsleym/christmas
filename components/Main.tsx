import { ReactNode } from "react";
import { Image, Container, Stack, Center, Heading } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

type MainProps = {
  title?: String;
  children: ReactNode;
};

export const Main = ({ title, children }: MainProps) => (
  <Container h="2xl">
    <Stack spacing={4} mt={8}>
      <Center>
        <Player
          src="https://assets3.lottiefiles.com/packages/lf20_owc0pksu.json"
          className="player"
          autoplay
          keepLastFrame
          style={{ height: "128px", width: "128px" }}
        />
        {/* <Image
          src="/images/ChristmasTree.svg"
          alt="christmas-tree"
          boxSize="32"
        /> */}
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
