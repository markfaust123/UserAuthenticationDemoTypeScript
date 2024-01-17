import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../src/util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const handleSignIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setIsAuthenticating(true);
      await login(email, password);
    } catch (error) {
      setError("Error logging in user");
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin={true} onAuthenticate={handleSignIn} />;
}

export default LoginScreen;
