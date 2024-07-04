// app/week-8/page.js
"use client"; // Ensure this is at the top

import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      {user ? (
        <div>
          <p>Hello, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
};

export default Page;
