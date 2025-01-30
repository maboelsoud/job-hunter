import { Button, Group, Space } from "@mantine/core";
import { JobsContent } from "../JobsContent";

export function Dashboard() {
  return (
    <>
      <Group>
        <Button>Refresh</Button>
        <Button>Fetch Older</Button>
        <Button>Fetch Newer</Button>
      </Group>
      <Space h="md" />
      <JobsContent />
    </>
  );
}
