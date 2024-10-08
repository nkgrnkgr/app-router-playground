"use client";

import { Button } from "@/components/ui/button";
import { revalidateAction } from "./revalidate";

export function RevalidateButton() {
  return (
    <Button
      onClick={() => {
        revalidateAction();
      }}
    >
      Revalidate
    </Button>
  );
}
