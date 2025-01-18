import { Table } from '@mantine/core';

const elements2 = [
    { position: 'software engineer', applicationDate: 12.011, status: 'C', employerName: 'Carbon' },
    { position: 'software engineer', applicationDate: 14.007, status: 'N', employerName: 'Nitrogen' },
    { position: 'software engineer', applicationDate: 88.906, status: 'Y', employerName: 'Yttrium' },
    { position: 'software engineer', applicationDate: 137.33, status: 'Ba', employerName: 'Barium' },
    { position: 'software engineer', applicationDate: 140.12, status: 'Ce', employerName: 'Cerium' },
  ];

  const elements = [
    { position: 'Software Engineer', applicationDate: new Date('2024-03-15').toDateString(), status: 'Applied', employerName: 'Google' },
    { position: 'Frontend Developer', applicationDate: new Date('2024-02-28').toDateString(), status: 'Interview', employerName: 'Amazon' },
    { position: 'Full Stack Developer', applicationDate: new Date('2024-01-10').toDateString(), status: 'Rejected', employerName: 'Meta' },
    { position: 'Backend Engineer', applicationDate: new Date('2024-04-05').toDateString(), status: 'Offer Received', employerName: 'Microsoft' },
    { position: 'Data Engineer', applicationDate: new Date('2024-03-01').toDateString(), status: 'Phone Screen', employerName: 'Netflix' },
    { position: 'DevOps Engineer', applicationDate: new Date('2024-02-18').toDateString(), status: 'Applied', employerName: 'Salesforce' },
    { position: 'Machine Learning Engineer', applicationDate: new Date('2024-04-12').toDateString(), status: 'Interview', employerName: 'Uber' },
    { position: 'Mobile App Developer', applicationDate: new Date('2024-01-25').toDateString(), status: 'Rejected', employerName: 'Spotify' },
    { position: 'Security Engineer', applicationDate: new Date('2024-03-22').toDateString(), status: 'Offer Received', employerName: 'Stripe' },
    { position: 'Game Developer', applicationDate: new Date('2024-02-05').toDateString(), status: 'Phone Screen', employerName: 'Electronic Arts (EA)' },
  ];

export const TableDemo = () => {
    const rows = elements.map((element, idx) => (
        <Table.Tr key={idx}>
          <Table.Td>{element.position}</Table.Td>
          <Table.Td>{element.employerName}</Table.Td>
          <Table.Td>{element.status}</Table.Td>
          <Table.Td>{element.applicationDate}</Table.Td>
        </Table.Tr>
      ));
    
      return (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Element position</Table.Th>
              <Table.Th>Element name</Table.Th>
              <Table.Th>status</Table.Th>
              <Table.Th>Date of application</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      );
}

const elements3 = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

export function TableDemo3() {
    const rows = elements3.map((element) => (
      <Table.Tr key={element.name}>
        <Table.Td>{element.position}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.symbol}</Table.Td>
        <Table.Td>{element.mass}</Table.Td>
      </Table.Tr>
    ));
  
    return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    );
  }