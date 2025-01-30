import { Paper, Tabs, ScrollArea, Pagination, Space, Box } from "@mantine/core";
import { JobRows } from "./Table";

export const JobsContent = () => {
  const totalPages = 2;
  const currentPage = 1;
  return (
    <>
      <Box visibleFrom="md">
        <Paper shadow="md" p="xl" radius="md" withBorder>
          <ScrollArea h={700}>
            <JobRows.Desktop />
          </ScrollArea>

          {totalPages > 1 && ( // Only show pagination if there are multiple pages
            <Pagination
              total={totalPages}
              page={currentPage}
              // onChange={handlePageChange}
              position="center"
            />
          )}
        </Paper>
      </Box>

      <Box hiddenFrom="md">
        <JobRows.Mobile />
      </Box>
    </>
  );
};

/*

        <Tabs defaultValue="jobs">
          <Tabs.List>
            <Tabs.Tab value="jobs">
              Jobs
            </Tabs.Tab>
            <Tabs.Tab value="emails">
              Emails
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="jobs">
            <ScrollArea style={{ height: 700 }}>
              <JobRowsTable></JobRowsTable>
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="emails">
            <ScrollArea style={{ height: 700 }}>
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>

        */
