import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: todos, error } = await supabase.from("todos").select();

  if (error) {
    return (
      <main className="p-8 font-sans">
        <p className="text-red-600">
          Could not load todos: {error.message}
        </p>
      </main>
    );
  }

  return (
    <main className="p-8 font-sans">
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.name as string}</li>
        ))}
      </ul>
    </main>
  );
}
