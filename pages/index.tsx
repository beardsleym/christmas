import Head from "next/head";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="christmas advent calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="tomato" m={2}>
        Christmas Time !
      </Box>
    </div>
  );
}
