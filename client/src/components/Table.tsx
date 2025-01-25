import { Anchor, Badge, Table } from '@mantine/core';
import jobStatusSample from '../../../server/jobStatusSample.json';

const elements = jobStatusSample;

const StatusField = ({ status }: { status: string }) => {

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
  return <Badge color={color}>{status}</Badge>
}

export const JobRowsTable = () => {
  const rows = elements.map((element, idx) => (
    <Table.Tr key={idx}>
      <Table.Td>{element.roleName}</Table.Td>
      <Table.Td>{element.employerName}</Table.Td>
      <Table.Td><StatusField status={element.status} /></Table.Td>
      <Table.Td>{
        element.dateApplied ?
          new Date(element.dateApplied).toDateString() : null
      }</Table.Td>
      <Table.Td>{element.actionToTake}</Table.Td>
      <Table.Td>{element.interviewDate}</Table.Td>
      <Table.Td>{element.jobPosting ? (
        <Anchor href={element.jobPosting} target="_blank" underline="hover">
          {element.jobPosting}
        </Anchor>
      ) : element.jobPosting}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table style={{ tableLayout: 'fixed' }}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={{ maxWidth: '150px' }}>Position</Table.Th>
          <Table.Th style={{ maxWidth: '150px' }}>Employer</Table.Th>
          <Table.Th style={{ maxWidth: '200px' }}>Status</Table.Th>
          <Table.Th style={{ maxWidth: '150px' }}>Date of application</Table.Th>
          <Table.Th style={{ maxWidth: '140px' }}>Action to take</Table.Th>
          <Table.Th style={{ maxWidth: '150px' }}>Interview Date</Table.Th>
          <Table.Th style={{ maxWidth: '300px' }}>Job posting url</Table.Th>

        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
