"use client";

import { SubTittle } from "@/components/SubTitle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Client() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <SubTittle>This is Client Component</SubTittle>
      <p>このコンポーネントクライアントで実行されます。</p>
      <Button onClick={handleClick}>Add+</Button>
      <p>{count}</p>
    </div>
  );
}
