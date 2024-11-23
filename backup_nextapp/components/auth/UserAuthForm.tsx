"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { Icons } from "../Icons";
import { useToast } from "../ui/use-toast";
import { Loader2 } from "lucide-react";
import { GoogleSignIn } from "@/app/(actions)/authActions";

interface UserAuthInterface extends React.HTMLAttributes<HTMLDivElement> { 
  role : "CANDIDATE" | "RECRUITER"
}

export default function UserAuthForm({ className , role }: UserAuthInterface) {

  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  async function handleGoogleLogin() {
    startTransition(async () => {
      try {
        await GoogleSignIn(role);
      } catch (error) {
        console.log(error);
        toast({
          title: "Google Authentication Error",
          description: "Please try again or contact the web developer i.e. parthkapoor.coder@gmail.com",
          variant: "destructive"
        })
      }
    })
  }

  return (
    <div className={cn("flex justify-center", className)}>
      <Button onClick={handleGoogleLogin} disabled={isPending} className="w-full" >
        {isPending ? (
          <Loader2 className="animate-spin mr-2 h-6 w-6"/>
        ) : (
          <Icons.googleLogo className="h-6 w-6 mr-2" />

        )}
        Google
      </Button>
    </div>
  )
}