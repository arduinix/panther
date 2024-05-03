import {
  Image,
  Switch,
  Tooltip,
  Box,
  Flex,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { PiDoorBold, PiDoorOpenBold } from "react-icons/pi";

export interface HeaderProps {
  loggedIn: boolean;
  handleLogout: () => void;
}

export default function Header({ loggedIn, handleLogout }: HeaderProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box h="70">
      <Flex alignItems="center" height="100%" p="10" justifyContent="flex-end">
        {/* <Image
          src={self_small}
          alt="self_small"
          boxSize="50px"
          objectFit="cover"
          borderRadius="full"
          ml={0}
          mr={4}
        /> */}
        <Box mr={5}>
          <Tooltip label="Toggle light/dark mode">
            <Switch
              onChange={toggleColorMode}
              checked={colorMode === "light"}
            />
          </Tooltip>
        </Box>

        <Box>
          {loggedIn ? (
            <Tooltip label="Logout">
              <IconButton
                aria-label="Logout"
                icon={<PiDoorOpenBold />}
                // onClick={toggleColorMode}
                size={"lg"}
                variant={"ghost"}
              />
            </Tooltip>
          ) : (
            <Tooltip label="Login">
              <IconButton
                aria-label="Login"
                icon={<PiDoorBold />}
                // onClick={toggleColorMode}
                size={"lg"}
                variant={"ghost"}
              />
            </Tooltip>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
