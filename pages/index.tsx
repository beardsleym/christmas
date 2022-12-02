import { useEffect, useState } from "react";
import { GetStaticPropsContext } from "next/types";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Container,
  IconButton,
  SimpleGrid,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { useLocalStorage } from "@mantine/hooks";
import { DayItem } from "../components/DayItem";
import { Info } from "../components/Info";
import { Header } from "../components/Header";
import { Countdown } from "../components/Countdown";

export default function Home() {
  const router = useRouter();
  const [currentDay, setCurrentDay] = useState(0);
  const [isDecember, setIsDecember] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(true);
    const d = new Date();
    const currentMonth = d.getMonth();
    currentMonth === 11 ? setIsDecember(true) : setIsDecember(false);
    if (
      localStorage.getItem("categories") === null ||
      localStorage.getItem("daysArray") === null ||
      localStorage.getItem("currentMonth") !== `${currentMonth}` ||
      (typeof value === "object" && value.length === 0)
    )
      router.push("/preferences");
    const intervalId = getCurrentDay();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, [router, value]);

  return (
    <>
      <Header />
      <>
        {isLoading ? (
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
        ) : (
          <>
            {isDecember ? (
              <Container h="2xl" maxW="4xl" px={2}>
                {daysArray && (
                  <SimpleGrid
                    columns={[4, 5, 6]}
                    spacingX={1}
                    spacingY={1}
                    pt={[2]}
                    pb={24}
                  >
                    {daysArray.map((day, i) => (
                      <DayItem key={i} itemDay={day} currentDay={currentDay} />
                    ))}
                  </SimpleGrid>
                )}
              </Container>
            ) : (
              <Countdown />
            )}
          </>
        )}
      </>
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
