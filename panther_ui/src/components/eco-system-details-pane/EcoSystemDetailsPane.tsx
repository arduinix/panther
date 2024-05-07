import { Box, Text, Heading, Button, Flex } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { EcoSystem } from '../../types'
import ecoSystems from '../../model_data/ecosystems.json'
const data: EcoSystem[] = ecoSystems

export default function EcoSystemDetailsPane() {
  const navigate = useNavigate()
  const { viewId } = useParams<{ viewId: string }>()
  const selectedEcoSystem =
    data.find((ecoSystem) => ecoSystem.id === viewId) || null
  if (!selectedEcoSystem) {
    return (
      <>
        <Box m={2}>
          <Text>Please select an ecosystem to view details.</Text>
        </Box>
      </>
    )
  }
  return (
    <>
      <Box bg={'gray.50'}>
        <Box m={2}>
          <Heading color={'gray.500'} size={'md'} m={2}>
            {selectedEcoSystem.name.toUpperCase()}
          </Heading>
          <Flex gap={2} justifyContent={'flex-end'}>
            <Button colorScheme="blue">Edit</Button>
            <Button colorScheme="red">Remove</Button>
          </Flex>
        </Box>
      </Box>
    </>
  )
}
