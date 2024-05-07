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
  Checkbox,
  Divider,
  Center,
} from '@chakra-ui/react'
import { EcoSystem } from '../../types'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import EcoSystemTable from '../../components/eco-system-table/EcoSystemTable'
import ecoSystems from '../../model_data/ecosystems.json'
import EcoSystemDetailsPane from '../../components/eco-system-details-pane/EcoSystemDetailsPane'
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
      <Heading size={'lg'}>Ecosystems</Heading>
      <Flex mt={3}>
        <Box width={'65%'} m={2}>
          <Flex m={2}>
            {!data || data.length === 0 ? (
              <Text>
                There are no ecosystems to display. Please create a new
                ecosystem.
              </Text>
            ) : (
              <EcoSystemTable data={data} />
            )}
          </Flex>
          <Flex
            gap={4}
            mr={4}
            justifyContent={'flex-end'}
            flexDirection={'row'}
          >
            <Checkbox>Show Removed</Checkbox>
            <Button colorScheme="blue">New Ecosystem</Button>
          </Flex>
        </Box>
        <Center>
          <Divider orientation="vertical" />
        </Center>
        <Box width={'35%'} m={2}>
          <EcoSystemDetailsPane />
        </Box>
      </Flex>
    </>
  )
}
