import { useEffect, useState, useCallback } from "react";
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
import { Player } from "@lottiefiles/react-lottie-player";
import { Title } from "components/Title";
import { Header } from "components/Header";
import { getItemsFromCategory, getEmoji } from "data/data";
import { Skips } from "features/item";

type itemProps = {
  category?: string;
  text?: string;
};

export default function ID() {
  const router = useRouter();
  const { id } = router.query;
  const locale = router.locale;
  const [item, setItem] = useState<itemProps>({
    category: "",
    text: "",
  });
  const [skippedItems, setSkippedItems] = useLocalStorage<
    itemProps[] | undefined
  >({
    key: "skippedItems",
  });
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

  const getAndSetItem = useCallback(() => {
    let arr: object[] = []; // temp array
    // Get used items
    const usedItems: itemProps[] = [];
    if (skippedItems)
      skippedItems?.forEach((skippedItem) => {
        usedItems.push(skippedItem);
      });
    for (let i = 0; i < 31; i++) {
      const usedItem = JSON.parse(localStorage.getItem(i.toString()) || "{}");
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
  }, [locale, setEvent, value, skippedItems]);

  useEffect(() => {
    if (value.length) {
      // let arr: object[] = []; // temp array
      if (localStorage.getItem("categories") !== null && id !== undefined) {
        // Already visited
        if (localStorage.getItem(`${id}`)) {
          const categoryId: itemProps = JSON.parse(
            localStorage.getItem(`${id}`) || "{}"
          );
          setItem(categoryId);
        } else {
          getAndSetItem();
        }
      }
    }
  }, [value, setEvent, event, id, locale, getAndSetItem]);

  const skipItem = () => {
    if (skippedItems !== undefined) {
      setSkippedItems(() => [...skippedItems, event]);
    } else {
      setSkippedItems([event]);
    }
    getAndSetItem();
  };

  return (
    <>
      <Player
        src="https://assets8.lottiefiles.com/packages/lf20_Qt396e.json"
        className="player"
        keepLastFrame
        autoplay
        loop
        speed={0.15}
        style={{
          zIndex: -1,
          position: "fixed",
          top: -10,
        }}
      />
      <Header />
      <Title>
        <IconButton
          as={NextLink}
          href="/"
          scroll={false}
          aria-label="go-back"
          icon={<ChevronLeftIcon w={24} h={24} />}
          position="fixed"
          top="78"
          left="30"
          colorScheme="transparent"
        />
        <Center>
          <Stack gap={8} maxW={"md"}>
            {item?.category ? (
              <Center>
                <Tag size={"lg"} variant="solid" backgroundColor="grey.600">
                  {getEmoji(item.category)} {item?.category?.toUpperCase()}
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
            {/* DISABLED AS ONLY 25 ITEMS IN EACH CATEGORY */}
            {/* <Skips skippedItems={skippedItems} skipItem={skipItem} /> */}
          </Stack>
        </Center>
      </Title>
    </>
  );
}
