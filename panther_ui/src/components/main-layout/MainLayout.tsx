import { Box, Flex, useDisclosure, useToast } from '@chakra-ui/react'
import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Navigation, { LinkItemProps } from '../navigation/Navigation'
import Home from '../../pages/home/Home'
import ContactModal from '../contact-modal/ContactModal'
import { LuHome, LuTrees, LuSettings } from 'react-icons/lu'
import { axiosClient } from '../../lib/auth/AxiosClient'
import { Contact } from '../../types'

export default function MainLayout() {
  const location = useLocation()
  const { isOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [contact, setContact] = useState<Contact>({
    name: '',
    subject: '',
    email: '',
    message: '',
  })

  const linkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: LuHome, href: '/' },
    {
      name: 'Ecosystems',
      icon: LuTrees,
      href: '/ecosystems',
      tooltip: 'Create new eco systems or manage existing ones.',
    },
    {
      name: 'Settings',
      icon: LuSettings,
      href: '/settings',
      tooltip: 'Modify system and experience settings.',
    },
  ]

  const onSend = async () => {
    onClose()
    try {
      await axiosClient.post('/message', {
        message: {
          name: contact.name,
          subject: contact.subject,
          email: contact.email,
          message: contact.message,
        },
      })
      toast({
        title: 'Message Sent!',
        description: 'Nick will get back to you soon!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setContact({ name: '', subject: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error',
        description: 'An error occurred while sending the message.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Box position={'relative'} minHeight={'100vh'}>
      <ContactModal
        isOpen={isOpen}
        onClose={onClose}
        onSend={onSend}
        contact={contact}
        setContact={setContact}
      />
      <Flex
        direction="column"
        position="absolute"
        width="100%"
        height="100%"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Flex overflow="scroll">
          <Navigation linkItems={linkItems} />
          <Box p={4} w="100%" flexGrow={1} overflow="scroll">
            {location.pathname === '/' ? <Home /> : <Outlet />}
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
