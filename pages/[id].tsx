import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Spinner,
  Heading,
  Tag,
  Center,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useLocalStorage } from "@mantine/hooks";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { getItemsFromCategory } from "../constants/data";

type itemProps = {
  category?: string;
  text?: string;
};

export default function ID() {
  const router = useRouter();
  const { id } = router.query;
  const locale = router.locale;
  const [item, setItem] = useState<itemProps>({ category: "", text: "" });
  const [value] = useLocalStorage<string[]>({
    key: "categories",
  });
  const [event, setEvent] = useLocalStorage<itemProps>({
    key: `${id}`,
  });

  function getDifference(array1: itemProps[], array2: itemProps[]) {
    return array1.filter(
      (object1: itemProps) =>
        !array2.some((object2: itemProps) => object1.text === object2.text)
    );
  }

  useEffect(() => {
    if (value.length) {
      let arr: object[] = []; // temp array
      if (localStorage.getItem("categories") !== null && id !== undefined) {
        // Already visited
        if (localStorage.getItem(`${id}`)) {
          const categoryId: itemProps = JSON.parse(
            localStorage.getItem(`${id}`) || "{}"
          );
          setItem(categoryId);
        } else {
          // Get used items
          const usedItems: itemProps[] = [];
          for (let i = 0; i < 31; i++) {
            const usedItem = JSON.parse(
              localStorage.getItem(i.toString()) || "{}"
            );
            if (usedItem.text) {
              usedItems.push(usedItem);
            }
          }
          // categories
          value.forEach((category) => {
            // all responses
            arr = arr.concat(getItemsFromCategory(category, locale || "en"));
          });
          const diff = getDifference(arr, usedItems);
          const categoryItem: itemProps =
            diff[Math.floor(Math.random() * diff.length)];
          setItem(categoryItem);
          if (categoryItem) setEvent(categoryItem);
        }
      }
    }
  }, [value, setEvent, event, id, locale]);

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
        <Center h="50vh">
          <Stack gap={8} maxW={"md"}>
            {item?.category ? (
              <Center>
                <Tag size={"lg"} variant="solid" backgroundColor="grey.600">
                  {item?.category?.toUpperCase()}
                </Tag>
              </Center>
            ) : (
              <Spinner
                thickness="4px"
                speed="1s"
                emptyColor="gray.600"
                color="white"
                size="xl"
                mt={16}
              />
            )}
            <Heading as="h3" size={"lg"} color="white" textAlign={"center"}>
              {item?.text}
            </Heading>
          </Stack>
        </Center>
      </Main>
    </>
  );
}
