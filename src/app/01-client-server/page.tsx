import { Stack } from "@/components/Stack";
import { Client } from "./_components/client";
import { Server } from "./_components/server";

export default function Page() {
  return (
    <Stack>
      <Server />
      <Client />
    </Stack>
  );
}
