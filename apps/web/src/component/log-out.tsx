"use client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { DropdownMenuItem } from "@repo/ui/components/dropdown-menu";
import { authClient } from "@repo/authweb/authnext/client";

const LogOutBotao = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleClick() {
    await authClient.signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("Até breve....!");
          router.replace("/auth/login");
        },
      },
    });
  }
  return (
    <DropdownMenuItem onClick={handleClick} disabled={isPending}>
      <LogOut />
      Log out
    </DropdownMenuItem>
  );
};

export default LogOutBotao;
