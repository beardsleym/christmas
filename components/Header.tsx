import React from "react";
import Head from "next/head";

export const Header: React.FC = () => {
  return (
    <Head>
      <title>Christmas Advent Calendar</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="christmas advent calendar" />
    </Head>
  );
};
