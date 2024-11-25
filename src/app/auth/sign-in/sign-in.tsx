"use client";
import { handleEmailSignIn } from "@/src/lib/auth/emailSignInServerAction";
import { handleGoogleSignIn } from "@/src/lib/auth/googleSignInServerAction";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({ email: "" as string });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      startTransition(async () => {
        await handleEmailSignIn(formData.email);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2>Sign In</h2>
        <div className="form-container">
          <form className="email-signin-form">
            <input
              className="form-input"
              type="email"
              placeholder="Email Address"
              maxLength={320}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormData({ email: e.target.value })
              }
              required
            />
            <button
              className="submit-button"
              type="submit"
              onClick={() => handleSubmit}
              disabled={isPending}
            >
              Sign In with email
            </button>
          </form>

          <div className="divider">
            <div className="line"></div>
            <span className="or">or</span>
            <div className="line"></div>
          </div>

          <div className="social-logins">
            <button className="google" onClick={() => handleGoogleSignIn()}>
              <FcGoogle className="google-icon" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
