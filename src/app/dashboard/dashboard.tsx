"use client";
import { SignOutButton } from "@/src/components/sign-out-button";
import { getAccountLinkStatus } from "@/src/lib/auth/getAccountLinkStatusServerAction";
import { getUserName } from "@/src/lib/auth/getUserNameServerAction";
import { getUserRole } from "@/src/lib/auth/getUserRoleServerAction";
import { handleGoogleSignIn } from "@/src/lib/auth/googleSignInServerAction";
import { unlinkGoogleAccount } from "@/src/lib/auth/unlinkGoogleAccountServerAction";
import { useEffect, useState } from "react";

export const DashboardPage = () => {
  const [isAccountLinked, setIsAccountLinked] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const userInfo = async () => {
      const name = await getUserName();
      if (name) {
        setUsername(name);
      }
      const role = await getUserRole();
      if (role) {
        setRole(role);
      }
    };
    const accountLinkStatus = async () => {
      try {
        const accountLinkStatus = await getAccountLinkStatus();
        setIsAccountLinked(accountLinkStatus);
      } catch (error) {
        console.error("Failed to get account link status", error);
      }
    };
    accountLinkStatus();
    userInfo();
  }, []);

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <div className="dashboard-card">
        <a href="/admin">Go to Admin page</a>
        <div>
          <p>Role: {role}</p>
        </div>
        <div className="name">{username}</div>
        <div>
          <button
            className="link-account-button"
            onClick={
              isAccountLinked
                ? async () => {
                    await unlinkGoogleAccount().then(() => {
                      setIsAccountLinked(false);
                    });
                  }
                : async () => {
                    await handleGoogleSignIn().then(() => {
                      setIsAccountLinked(true);
                    });
                  }
            }
          >
            {isAccountLinked
              ? "Disconnect Google Account"
              : "Connect Google Account"}
          </button>
        </div>
        <div>
          <SignOutButton className="signout-button" />
        </div>
      </div>
    </div>
  );
};
