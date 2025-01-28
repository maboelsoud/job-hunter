import { Paper, Tabs, ScrollArea, Pagination } from "@mantine/core"
import { JobRowsTable } from "./components/Table"


export const JobsContent = ()=> {
  const totalPages = 2;
  const currentPage = 1;
    return (

      <Paper shadow="md" p="xl" radius="md" withBorder>
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
        {totalPages > 1 && ( // Only show pagination if there are multiple pages
          <Pagination
            total={totalPages}
            page={currentPage}
            // onChange={handlePageChange}
            position="center"
          />
        )}
      </Paper>
    )
}