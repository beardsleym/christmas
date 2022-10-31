import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Main } from "../components/Main";
import { Heading, Tag, Center, IconButton, Box } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Header } from "../components/Header";
import { useLocalStorage } from "@mantine/hooks";
import { categories, kitchen, outings, decorating } from "../constants/data";

type itemProps = {
  category?: string;
  text?: string;
};

export default function ID() {
  const router = useRouter();
  const { id } = router.query;
  const [text, setText] = useState("");
  const [category, setCategory] = useState(null);
  const [item, setItem] = useState<itemProps>({});
  const [value, setValue] = useLocalStorage<string[]>({
    key: "categories",
  });

  const concatCategories = (val: string) => {
    switch (val) {
      case "Kitchen":
        return kitchen();
      case "Outings":
        return outings();
      case "Decorating":
        return decorating();
      default:
        return [];
    }
  };

  useEffect(() => {
    if (value.length) {
      let arr: object[] = [];
      if (localStorage.getItem("categories") !== null) {
        console.log(value);
        console.log(categories);
        value.forEach((val) => {
          arr = arr.concat(concatCategories(val));
        });
        setItem(arr[Math.floor(Math.random() * arr.length)]);
      }
    }
  }, [value]);

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
            {item?.category?.toUpperCase()}
          </Tag>
        </Center>
        <Heading as="h2" size={"3xl"} color="white" textAlign={"center"}>
          {item?.text}
        </Heading>
      </Main>
    </>
  );
}
