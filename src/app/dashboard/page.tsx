import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";
import { redirect } from "next/navigation";
import { DashboardPage } from "./dashboard";

const Dashboard = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect("/auth/sign-in");
  }

  return <DashboardPage />;
};

export default Dashboard;
