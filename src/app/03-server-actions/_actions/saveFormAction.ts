"use server";

export async function saveFormAction(formData: FormData) {
  const name = formData.get("name");
  const age = formData.get("age");
  // この処理はサーバーのログとして出力される
  console.log({
    name,
    age,
  });
  return { formSaved: true, name, age };
}
