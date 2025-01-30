import {
  Container,
  Title,
  Text,
  List,
  ListItem,
  Code,
  SimpleGrid,
  Space,
} from "@mantine/core";

export const Help = () => {
  return (
    <Container size="md" my={30}>
      <Title order={2}>Help</Title>
      <Text>
        This application allows you to track your job applications and manage
        emails. Here are some helpful tips:
      </Text>
      <Space h="md" />

      <SimpleGrid cols={2} spacing={30}>
        <div>
          <Title order={4}>Getting Started</Title>
          <List>
            <ListItem>Sign up or sign in.</ListItem>
            <ListItem>Add your job applications.</ListItem>
            <ListItem>Use the filters to view jobs.</ListItem>
            <ListItem>View emails using the email tab.</ListItem>
          </List>
        </div>
        <Space h="md" />
        <div>
          <Title order={4}>Troubleshooting</Title>
          <List>
            <ListItem>
              If you see an error, check your network connection.
            </ListItem>
            <ListItem>If you have issues signing in, contact support.</ListItem>
            <ListItem>
              If you are having trouble fetching data, make sure you are logged
              in.
            </ListItem>
          </List>
        </div>
      </SimpleGrid>

      <Space h="md" />
      <Title order={4}>Contact Us</Title>
      <Text>
        If you encounter any issues or have questions, please contact us at{" "}
        <Code>mohamed.aaes@gmail.com</Code>.
      </Text>
    </Container>
  );
};

export default Help;
