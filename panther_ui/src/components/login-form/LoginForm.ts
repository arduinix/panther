import { useState } from "react";
import { login } from "../../lib/auth/CognitoAuth";
import { SignInInput } from "@aws-amplify/auth";

export interface LoginFormProps {
  onLogin: () => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(false);
    const success = await login({ username: email, password } as SignInInput)
      .then((response) => {
        if (response !== undefined) {
          onLogin();
          return true;
        }
        return false;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input
            className="input"
            type="text"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      {error && (
        <div className="message is-danger">
          <p className="message-body">Login failed</p>
        </div>
      )}
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
