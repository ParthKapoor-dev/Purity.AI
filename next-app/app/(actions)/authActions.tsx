
import { signIn, signOut } from "next-auth/react";
import Cookies from "js-cookie";

export async function GoogleSignIn( role : "CANDIDATE" | "RECRUITER") {
  try {

    console.log("Role @GoogleSignIn : " , role);

    // document.cookie = `user_role=${role}; path=/; secure; samesite=strict`;
    Cookies.set("user_role" , role);

    await signIn("google" , {
      callbackUrl : "/home",
      role
    });
  } catch (err) {
    console.log(err);
  }
};


export async function logout() {
  try {
    await signOut({
      callbackUrl : window.location.origin + "/login"
    });
  } catch (error) {
    console.log(error);
  }
}