import NextLink from "next/link";
import { useRouter } from "next/router";
import { Container, IconButton, SimpleGrid } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { DayItem } from "../components/DayItem";
import { Info } from "../components/Info";
import { Header } from "../components/Header";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useLocalStorage<string[]>({
    key: "categories",
    defaultValue: undefined,
  });
  const [array, setArray] = useLocalStorage<Number[]>({
    key: "daysArray",
    defaultValue: undefined,
  });

  useEffect(() => {
    if (
      localStorage.getItem("categories") === null ||
      localStorage.getItem("daysArray") === null ||
      (typeof value === "object" && value.length === 0)
    )
      router.push("/preferences");
  }, [router, value]);

  const date = new Date();
  const currentDay = date.getDate();
  return (
    <>
      <Header />
      <Container h="2xl" maxW="4xl">
        <SimpleGrid m={8} columns={[1, 2, 3]} spacingX={8} spacingY={8}>
          {array &&
            array.map((value, i) => (
              <DayItem key={i} id={value} disabled={value !== currentDay} />
            ))}
        </SimpleGrid>
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
