import Head from "next/head";

export const Header: React.FC = () => (
  <Head>
    <title>Christmas Advent Calendar</title>
    <link rel="icon" href="images/favicon.ico" />
    <meta
      name="description"
      content="Christmas advent calendar activities for you to enjoy."
    />
    <meta
      property="og:image"
      content="https://xmascal.netlify.com/images/family.png"
    />
  </Head>
);
