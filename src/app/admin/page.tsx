import { getUserRole } from "@/src/lib/auth/getUserRoleServerAction";
import { redirect } from "next/navigation";
import { AdminPage } from "./admin";

const Admin = async () => {
  const role = await getUserRole();
  if(role === "ADMIN") {
    return <AdminPage />;
  }
  
  redirect("/dashboard");
};

export default Admin;
