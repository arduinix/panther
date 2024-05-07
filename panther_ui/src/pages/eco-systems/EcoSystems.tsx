import {
  Box,
  Flex,
  FlexProps,
  Icon,
  Text,
  useMediaQuery,
  Tooltip,
  Heading,
  Button,
} from '@chakra-ui/react'
import { EcoSystem } from '../../types'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import EcoSystemTable from '../../components/eco-system-table/EcoSystemTable'
import ecoSystems from '../../model_data/ecosystems.json'
const data: EcoSystem[] = ecoSystems

export default function EcoSystems() {
  const navigate = useNavigate()
  const { viewId } = useParams<{ viewId: string }>()
  useEffect(() => {
    if (data && data.length > 0 && !viewId) {
      navigate('/ecosystems/' + data[0].id)
    }
  })
  return (
    <>
      <Heading size={'lg'}>Eco Systems</Heading>
      <Flex mt={3}>
        <Box width={'65%'} m={2}>
          <Flex direction="column" align="flex-end" m={2}>
            <EcoSystemTable
              data={data}
              //   setSelectedRow={() => navigate('/ecosystems/id')}
            />
            <Button mt={3} colorScheme="blue">
              New Ecosystem
            </Button>
          </Flex>
        </Box>
        <Box width={'35%'} m={2}>
          <Text>Eco System Details</Text>
        </Box>
      </Flex>
    </>
  )
}
