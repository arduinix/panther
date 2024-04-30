import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./App.css";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import AppRouter from "./components/app-router/AppRouter";
import theme from "./theme";
import panther from "./assets/pantherbg.jpg";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ChakraProvider theme={theme}>
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
            <AppRouter />
          </Box>
        </ChakraProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
