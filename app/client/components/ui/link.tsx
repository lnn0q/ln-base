import { Link as ChakraLink } from "@chakra-ui/react";
import { createLink, LinkComponent } from "@tanstack/react-router";
import * as React from "react";

interface ChakraLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ChakraLink>, "href"> {}

const ChakraLinkComponent = React.forwardRef<
  HTMLAnchorElement,
  ChakraLinkProps
>((props, ref) => {
  return <ChakraLink ref={ref} {...props} />;
});

const CreatedLinkComponent = createLink(ChakraLinkComponent);

export const Link: LinkComponent<typeof ChakraLinkComponent> = (props) => {
  return (
    <CreatedLinkComponent
      textDecoration={"underline"}
      _hover={{ textDecoration: "none" }}
      _focus={{ textDecoration: "none" }}
      preload={"intent"}
      {...props}
    />
  );
};
