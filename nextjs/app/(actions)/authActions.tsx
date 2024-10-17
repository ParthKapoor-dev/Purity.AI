import { signIn, signOut } from "next-auth/react";

export async function GoogleSignIn() {
  try {
    await signIn("google");
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