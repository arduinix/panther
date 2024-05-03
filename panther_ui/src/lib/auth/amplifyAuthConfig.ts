import { ResourcesConfig } from "aws-amplify";

// export const amplifyAuthConfig: ResourcesConfig = {
//   userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID || "",
//   region: process.env.REACT_APP_REGION || "",
//   userPoolWebClientId: process.env.REACT_APP_USER_POOL_USER_CLIENT_ID || "",
// };

export const amplifyAuthConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID || "",
      userPoolClientId: process.env.REACT_APP_USER_POOL_USER_CLIENT_ID || "",
    },
  },
};
