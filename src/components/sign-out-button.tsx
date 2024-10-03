"use client";

import { ReactNode } from "react";
import { handleSignOut } from "../lib/auth/googleSignOutServerAction";

export const SignOutButton = (props: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <button
      className={props.className}
      style={{ cursor: "pointer" }}
      onClick={() => handleSignOut()}
    >
      {props.children || "Sign out"}
    </button>
  );
};
