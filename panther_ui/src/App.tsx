import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "./App.css";
import { amplifyAuthConfig } from "./lib/auth/amplifyAuthConfig";
import Router from "./Router";
import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react/styles/reset.layer.css'
import '@aws-amplify/ui-react/styles/base.layer.css'
import '@aws-amplify/ui-react/styles/button.layer.css'

Amplify.configure(amplifyAuthConfig);

function App() {
  return (
    <Authenticator>
      <Router />
    </Authenticator>
  );
}

export default App;
