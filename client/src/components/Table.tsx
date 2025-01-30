import {
  Anchor,
  Badge,
  Card,
  Group,
  Paper,
  Stack,
  Table,
  Text,
  Button,
  Title,
  Divider,
  BadgeProps,
  Indicator,
} from "@mantine/core";
import jobStatusSample from "../../../server/jobStatusSample.json";

const elements = jobStatusSample;

const StatusField = (props: { status: string } & BadgeProps) => {
  const { status } = props;

  let color: string;
  switch (status) {
    case "applied":
      color = "cyan";
      break;
    case "rejected":
      color = "gray";
      break;
    case "action required":
      color = "red";
      break;
    case "interview scheduled":
      color = "blue";
      break;
    case "need followup":
      color = "orange";
      break;
    case "waiting on recruiter":
      color = "yellow";
      break;
    default:
      color = "cyan";
      break;
  }
  return (
    <Badge size="xs" color={color} {...props}>
      {status}
    </Badge>
  );
};

export const JobRows = {
  Desktop: () => {
    const rows = elements.map((element, idx) => (
      <Table.Tr w={900} key={idx}>
        <Table.Td>{element.roleName}</Table.Td>
        <Table.Td>{element.employerName}</Table.Td>
        <Table.Td>
          <StatusField status={element.status} />
        </Table.Td>
        <Table.Td>
          {element.dateApplied
            ? new Date(element.dateApplied).toDateString()
            : null}
        </Table.Td>
        <Table.Td>{element.actionToTake}</Table.Td>
        <Table.Td>{element.interviewDate}</Table.Td>
        <Table.Td>
          {element.jobPosting ? (
            <Anchor href={element.jobPosting} target="_blank" underline="hover">
              View Job Posting
            </Anchor>
          ) : (
            element.jobPosting
          )}
        </Table.Td>
      </Table.Tr>
    ));

    return (
      <Table style={{ tableLayout: "fixed" }} stickyHeader >
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ maxWidth: "150px" }}>Position</Table.Th>
            <Table.Th style={{ maxWidth: "150px" }}>Employer</Table.Th>
            <Table.Th style={{ width: "150px" }}>Status</Table.Th>
            <Table.Th style={{ maxWidth: "150px" }}>
              Date of application
            </Table.Th>
            <Table.Th style={{ maxWidth: "140px" }}>Action to take</Table.Th>
            <Table.Th style={{ maxWidth: "150px" }}>Interview Date</Table.Th>
            <Table.Th style={{ maxWidth: "300px" }}>Job posting url</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    );
  },

  Mobile: () => {
    return (
      <Stack p={10} gap="lg">
        {elements.map((element, idx) => (
          <Indicator key={idx} inline label="New" size={20} radius="sm" offset={5}>
            <Card key={idx} shadow="md" radius="md" withBorder>
              <Group justify="space-between">
                <Text size="xs" c="dimmed">
                  {element.dateApplied}
                </Text>
                <Text size="xs" c="dimmed">
                  Toronto, ON, Canada
                </Text>
              </Group>

              <Divider my="xs" />

              <Group justify="space-between" my="lg">
                <Title order={2}>{element.employerName}</Title>
                <StatusField
                  status={element.status}
                  variant="outline"
                  size="lg"
                />
              </Group>
              <Stack>
                <Paper
                  p="xs"
                  bg="rgba(120, 120, 120, 0.05)"
                  shadow="0"
                  radius="md"
                  m={0}
                >
                  <Stack>
                    <Group justify="space-between">
                      <Text fw={600} size="xs">
                        Role Name
                      </Text>
                      <Text size="xs">{element.roleName || "Unkown"}</Text>
                    </Group>
                    <Divider my={-10} />
                    <Group justify="space-between">
                      <Text fw={600} size="xs">
                        Status
                      </Text>
                      <Text size="xs">{element.status}</Text>
                    </Group>
                    <Divider my={-10} />

                    {/* <Paper p="xs" bg="dimmed" shadow='0' radius="md" m={0}> */}
                    <Group justify="space-between">
                      <Text fw={600} size="xs">
                        Action To Take
                      </Text>
                      <Text size="xs" c={element.actionToTake ? "" : "dimmed"}>
                        {element.actionToTake || "none"}
                      </Text>
                    </Group>
                    {/* </Paper> */}
                    <Divider my={-10} />
                    <Group justify="space-between">
                      <Text fw={600} size="xs">
                        Interview Date
                      </Text>
                      <Text size="xs" c={element.interviewDate ? "" : "dimmed"}>
                        {element.interviewDate || "none"}
                      </Text>
                    </Group>
                  </Stack>
                </Paper>
                {element.jobPosting && (
                  <Button
                    component="a"
                    href={element.jobPosting}
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    View Job Posting
                  </Button>
                )}
              </Stack>
            </Card>
          </Indicator>
        ))}
      </Stack>
    );
  },
};
