"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export function BackButton() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return <Button onClick={handleClick}>Back To Users</Button>;
}
