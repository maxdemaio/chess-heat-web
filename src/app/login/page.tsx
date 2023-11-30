import { LoginButton } from "@/components/login-button";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export default function Login({
  searchParams,
}: {
  searchParams: {
    redirectTo: string | null;
  };
}) {
  return (
    <div className="-mt-[56px] flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-5xl font-kai">Log in to Chess Heat</h1>
      <p className="mb-4 text-muted-foreground text-sm">
        Ayo ayo ayo stuff here
      </p>
      <LoginButton redirectTo={searchParams.redirectTo ?? '/explore'}/>
      <p className="mt-4 text-muted-foreground text-sm">
        By clicking Login, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
