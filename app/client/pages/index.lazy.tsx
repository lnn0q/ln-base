import { Text, Stack } from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Stack>
      <Text>Hello world!</Text>
      <Text>This is my template!</Text>
    </Stack>
  );
}
