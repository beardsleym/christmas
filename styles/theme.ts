import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    50: "#ffe6ea",
    100: "#f6bfc5",
    200: "#e9979e",
    300: "#de6d79",
    400: "#d44553",
    500: "#ba2b39",
    600: "#92212d",
    700: "#69161f",
    800: "#410a11",
    900: "#1d0103",
  },
};

const styles = {
  global: () => ({
    body: {
      bg: "primary.500",
    },
  }),
};

export const theme = extendTheme({ colors, styles });
