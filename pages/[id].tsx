import { useRouter } from "next/router";
import NextLink from "next/link";
import { Main } from "../components/Main";
import { Heading, Tag, Center, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Header } from "../components/Header";
export default function ID() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <Main>
        <IconButton
          as={NextLink}
          href="/"
          aria-label="go-back"
          icon={<ChevronLeftIcon w={24} h={24} />}
          position="fixed"
          top="78"
          left="30"
          colorScheme="transparent"
        />

        <Center>
          <Tag size={"lg"} variant="solid" backgroundColor="grey.600">
            ACTIVITY
          </Tag>
        </Center>
        <Heading as="h2" size={"4xl"} color="white" textAlign={"center"}>
          Look at holiday lights
        </Heading>
      </Main>
    </>
  );
}
