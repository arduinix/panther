import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { EcoSystem } from '../../types'
import { useNavigate, useParams } from 'react-router-dom'

export interface EcoSystemTableProps {
  data: EcoSystem[]
}

export default function EcoSystemTable({ data }: EcoSystemTableProps) {
  const navigate = useNavigate()
  const { viewId } = useParams<{ viewId: string }>()
  return (
    <TableContainer>
      <Table colorScheme="gray">
        <TableCaption>Select an Eco System to see more details.</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Outer Location</Th>
            <Th>Total Images</Th>
            <Th>Identified Species</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(
            (
              { id, name, outerEntity, fTotalImages, fIdentifiedSpecies },
              index
            ) => (
              <Tr
                key={id}
                onClick={() => navigate(`/ecosystems/${id}`)}
                bg={
                  viewId === id
                    ? 'blue.100'
                    : index % 2 === 0
                    ? 'gray.200'
                    : 'white'
                }
                _hover={{ bg: 'blue.200' }}
              >
                <Td>{name}</Td>
                <Td>{outerEntity}</Td>
                <Td>{fTotalImages}</Td>
                <Td>{fIdentifiedSpecies}</Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
