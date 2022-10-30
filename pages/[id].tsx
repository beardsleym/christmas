import { useRouter } from "next/router";
import NextLink from "next/link";
import { Main } from "../components/Main";
import { Heading, Tag, Center, IconButton, Box } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Header } from "../components/Header";
import { kitchen, outings } from "../constants/data";

export default function ID() {
  const router = useRouter();
  const { id } = router.query;
  let text;
  let category;
  if (Number(id) % 2 === 0) {
    category = "KITCHEN";
    text = kitchen[Math.floor(Math.random() * kitchen.length)];
  } else {
    category = "OUTINGS";
    text = outings[Math.floor(Math.random() * outings.length)];
  }

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
            {category}
          </Tag>
        </Center>
        <Heading as="h2" size={"3xl"} color="white" textAlign={"center"}>
          {text}
        </Heading>
      </Main>
    </>
  );
}
