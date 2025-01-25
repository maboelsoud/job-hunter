import { useState } from 'react'
import { Button, Card, Container, Group, LoadingOverlay, Pagination, Paper, ScrollArea, Space, Tabs, Title } from '@mantine/core';
// import './App.css'
import { JobRowsTable } from './components/Table';

const demoProps = {
  // bg: 'var(--mantine-color-blue-light)',
  // h: 500,
  // mt: 'lg',
  p: 40,
  style: { maxWidth: '100%', width: '80%' , minHeight: '100vh'}, // Make container wider

};

function App() {

  const totalPages = 2;
  const currentPage = 1;
  const loading = false;
  return (
    <Container {...demoProps}>
      <LoadingOverlay visible={loading} /> {/* Show loading overlay */}
      <Title order={1}>Job Statuses</Title>
      <Space h="md" /> {/* Add vertical spacing */}
      <Group position="center">
        <Button>Refresh</Button>
        <Button>Fetch Older</Button>
        <Button>Fetch Newer</Button>
      </Group>
      <Space h="md" />

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

    </Container>
  )
}

export default App
