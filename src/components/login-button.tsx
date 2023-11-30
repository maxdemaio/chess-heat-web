"use client";

// import { signIn } from '@repo/auth/react';

function signIn(param1: string, param2: Object) {
  return null;
}

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { useTheme } from "next-themes";

type State = "error" | "idle" | "pending" | "success";

export function LoginButton({ redirectTo }: { redirectTo: string }) {
  const [state, setState] = useState<State>("idle");

  const { setTheme, resolvedTheme } = useTheme();

  const handleSignIn = async () => {
    try {
      setState("pending");
      await signIn("github", { callbackUrl: redirectTo });
    } catch (error) {
      setState("error");
    }
  };

  return (
    <div className="mx-auto rounded-md duration-300 hover:shadow-[0_0_2rem_-0.5rem_#3178c6]">
      <Button
        variant="outline"
        onClick={handleSignIn}
        disabled={state === "pending"}
        className="fancy-border-gradient hover:bg-background relative mx-auto flex gap-2 border-none"
      >
        <span>Log in with Chess.com</span>

        {resolvedTheme === "dark" && <Icons.chesscomdark />}
        {resolvedTheme === "light" && <Icons.chesscom />}
      </Button>
    </div>
  );
}
