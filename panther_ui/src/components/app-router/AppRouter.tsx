import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { isLoggedIn, logout } from "../../lib/auth/CognitoAuth";
import NotFound from "../../pages/not-found/NotFound";
import MainLayout from "../main-layout/MainLayout";
import panther from "../../assets/pantherbg.jpg";
import Header from "../header/Header";

export default function AppRouter() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    logout();
    navigate("/login");
  };

  isLoggedIn().then((response) => {
    if (response) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <>
     <Header
            loggedIn={loggedIn}
            handleLogout={handleLogout}
          />
      <Box position={"relative"} minHeight={"100vh"}>
        <Box
          backgroundImage={panther}
          bgSize="cover"
          bgPosition="center"
          opacity={0.2}
          minHeight="100vh"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
        />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainLayout />}>
            {/* <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} /> */}
          </Route>
        </Routes>
      </Box>
    </>
  );
}
