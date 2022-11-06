import { useEffect, useState } from "react";
import { GetStaticPropsContext } from "next/types";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Container,
  IconButton,
  SimpleGrid,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { useLocalStorage } from "@mantine/hooks";
import { DayItem } from "../components/DayItem";
import { Info } from "../components/Info";
import { Header } from "../components/Header";

export default function Home() {
  const router = useRouter();
  const [currentDay, setCurrentDay] = useState(0);
  const [value] = useLocalStorage<string[]>({
    key: "categories",
    defaultValue: undefined,
  });
  const [daysArray] = useLocalStorage<Number[]>({
    key: "daysArray",
    defaultValue: undefined,
  });

  const getCurrentDay = () => {
    const date = new Date();
    const day = date.getDate();
    setCurrentDay(day);
    const intervalId = setInterval(() => {
      setCurrentDay(day);
    }, 60000);
    return intervalId;
  };

  useEffect(() => {
    const d = new Date();
    const currentMonth = d.getMonth();
    if (
      localStorage.getItem("categories") === null ||
      localStorage.getItem("daysArray") === null ||
      localStorage.getItem("currentMonth") !== `${currentMonth}` ||
      (typeof value === "object" && value.length === 0)
    )
      router.push("/preferences");
    const intervalId = getCurrentDay();
    return () => {
      clearInterval(intervalId);
    };
  }, [router, value]);

  return (
    <>
      <Header />
      <Container h="2xl" maxW="4xl">
        {daysArray ? (
          <SimpleGrid
            columns={[1, null, 2, 3]}
            spacingX={4}
            spacingY={8}
            py={8}
          >
            {daysArray.map((val, i) => (
              <DayItem key={i} id={val} disabled={val !== currentDay} />
            ))}
          </SimpleGrid>
        ) : (
          <Center h="100vh">
            <Spinner
              thickness="4px"
              speed="1s"
              emptyColor="gray.600"
              color="white"
              size="xl"
              mt={16}
            />
          </Center>
        )}
      </Container>
      <IconButton
        as={NextLink}
        href="/preferences"
        aria-label="preferences"
        icon={<SettingsIcon w={8} h={8} />}
        position="fixed"
        bottom="30"
        left="30"
        colorScheme="transparent"
      />
      <Info />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
