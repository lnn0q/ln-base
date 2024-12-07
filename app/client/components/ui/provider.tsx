"use client";

import { Theme, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider forcedTheme="dark" />
      <Theme colorPalette="cyan">{props.children}</Theme>
    </ChakraProvider>
  );
}
