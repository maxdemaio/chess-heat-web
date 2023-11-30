import { LoginButton } from "@/components/login-button";

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
        Join Chess Heat by logging in below.
      </p>
      {/* use search params to redir, otherwise profiles */}
      <LoginButton redirectTo={searchParams.redirectTo ?? "/profiles"} />
      <p className="mt-4 text-muted-foreground text-sm">
        By clicking Login, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
