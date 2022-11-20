import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlProvider } from "next-intl";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "fcb8aa7e3e5043ccb9dd62b418d82ea0"}'
      />
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ChakraProvider>
  );
}
