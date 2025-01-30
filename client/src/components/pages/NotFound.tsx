import { Container, Title, Text, Space, Image, Anchor } from "@mantine/core";

export const NotFound = () => {
  return (
    <Container size="sm" my={30}>
      <Title order={2}>404: Cat-astrophe!</Title>
      <Space h="md" />
      <Image
        src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A cute cat"
      />
      <Space h="md" />
      <Text>
        Looks like this page has gone on a solo cat adventure. Head back to the{" "}
        <Anchor href="/">homepage</Anchor> to continue your adventure.
      </Text>
    </Container>
  );
};

export default NotFound;
