import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Noto Sans",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Noto Sans",
      },
    },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {},
        // 4. We can override existing variants
        solid: (props) => ({
          bg: "gray.900",
          color: "whitesmoke",
          _hover: {
            bg: "gray.700",
          },
        }),
      },
    },
  },
});
export default theme;
