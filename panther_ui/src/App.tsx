import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "./App.css";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import AppRouter from "./components/app-router/AppRouter";
import theme from "./theme";
import { amplifyAuthConfig } from "./lib/auth/amplifyAuthConfig";

Amplify.configure(amplifyAuthConfig);

function App() {
  return (
    <Authenticator>
      <BrowserRouter>
        <ErrorBoundary>
          <ChakraProvider theme={theme}>
            <AppRouter />
          </ChakraProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </Authenticator>
  );
}

export default App;
