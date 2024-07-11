import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "../db";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

export default function NewToDo() {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-5xl">New To-Do</h1>
        </header>
        <form action={createTodo} className="gap-2">
          <input
            type="text"
            name="title"
            placeholder="Add To-Do"
            className="input input-bordered input-primary w-full max-w-xs bg-white text-black"
          />
          <div className="flex gap-5 mt-4 ">
            <Link href="..">
              <button className="btn btn-error">Cancel</button>
            </Link>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
