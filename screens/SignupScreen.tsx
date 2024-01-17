import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../src/util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const handleSignUp = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setIsAuthenticating(true);
      await createUser(email, password);
    } catch (error) {
      setError("Error creating user");
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent isLogin={false} onAuthenticate={handleSignUp} />;
}

export default SignupScreen;
