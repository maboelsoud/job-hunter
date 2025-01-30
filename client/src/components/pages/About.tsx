import { Container, Title, Text, List, ListItem, Space } from "@mantine/core";

export const About = () => {
  return (
    <Container size="md" my={30}>
      <Title order={2}>About Job Hunter</Title>
      <Text>
        Job Hunter is a web application designed to simplify job application
        tracking and communication management. It aims to provide a centralized
        location to monitor your applications, and to access related emails.
      </Text>

      <Space h="md" />
      <Title order={4}>Key Features</Title>
      <List>
        <ListItem>Job application tracking</ListItem>
        <ListItem>Email integration</ListItem>
        <ListItem>User authentication</ListItem>
        <ListItem>Responsive design</ListItem>
      </List>

      <Space h="md" />
      <Title order={4}>Technologies</Title>
      <List>
        <ListItem>React</ListItem>
        <ListItem>Mantine UI</ListItem>
        <ListItem>Firebase</ListItem>
        <ListItem>Node.js</ListItem>
        <ListItem>TypeScript</ListItem>
      </List>

      <Title order={4}>Contact</Title>
      <Text>
        For any inquiries or feedback, please contact us at{" "}
        <a href="mailto:mohamed.aaes@gmail.com">mohamed.aaes@gmail.com</a>.
      </Text>
    </Container>
  );
};

export default About;
