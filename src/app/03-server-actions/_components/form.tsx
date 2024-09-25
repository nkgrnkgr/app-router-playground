"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { saveFormAction } from "../_actions/saveFormAction";

export function Form() {
  const handleSubmit = async (formData: FormData) => {
    const a = await saveFormAction(formData);
    alert(`${a.name} さん (${a.age}歳) を保存しました`);
  };

  return (
    <form className="flex flex-col gap-4 w-96" action={handleSubmit}>
      <Label>
        名前：
        <Input name="name" />
      </Label>
      <Label>
        年齢：
        <Input name="age" />
      </Label>
      <Button type="submit">送信</Button>
    </form>
  );
}
