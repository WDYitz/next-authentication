"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export const SignInButton = (props: {
  className?: string;
  children?: ReactNode;
}) => {
  const router = useRouter();
  return (
    <button
      className={props.className}
      style={{ cursor: "pointer" }}
      onClick={() => {
        router.push("/auth/sign-in");
      }}
    >
      {props.children || "Sign in"}
    </button>
  );
};
