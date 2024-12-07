import { Text, Icon, Stack } from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <Stack flexDirection={"row"} alignItems={"center"}>
      <Text>Hello from About!</Text>
      <Text>And NerdFonts!</Text>
      <Icon>
        <i className="nf nf-fa-heart" />
      </Icon>
      <Icon>
        <i className="nf nf-custom-vim" />
      </Icon>
    </Stack>
  );
}
