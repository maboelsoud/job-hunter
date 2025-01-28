import { useState } from 'react'
import { Button, Card, Container, Group, LoadingOverlay, Pagination, Paper, ScrollArea, Space, Tabs, Title } from '@mantine/core';
// import './App.css'
import { JobRowsTable } from './components/Table';
import { Login } from './components/firebase/Login';
import { JobsContent } from './JobsContent';

const demoProps = {
  // bg: 'var(--mantine-color-blue-light)',
  // h: 500,
  // mt: 'lg',
  // p: 20,
  // style: { maxWidth: '100%', width: '80%' , minHeight: '100vh'}, // Make container wider

};

function App() {

  const loading = false;
  return (
    <Container {...demoProps}>
      <LoadingOverlay visible={loading} /> {/* Show loading overlay */}
      <Title order={1}>Job Statuses</Title>
      <Login/>
      <Space h="md" /> {/* Add vertical spacing */}
      <Group position="center">
        <Button>Refresh</Button>
        <Button>Fetch Older</Button>
        <Button>Fetch Newer</Button>
      </Group>
      <Space h="md" />

      <JobsContent/>


    </Container>
  )
}

export default App
