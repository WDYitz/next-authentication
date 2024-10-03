import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";
import { redirect } from "next/navigation";
import SignInPage from "./sign-in";

const SignIn = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if(isAuthenticated) {
    redirect("/dashboard");
  }

  return <SignInPage />;
};

export default SignIn;
