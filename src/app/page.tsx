import Image from "next/image";
import Link from "next/link";
import { TodoItem } from "./components/TodoItem";
import { prisma } from "./db";
import { revalidatePath } from "next/cache";

async function getTodos() {
  return await prisma.todo.findMany();
}

async function deleteTodo(id: string) {
  "use server";
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
  revalidatePath("/");
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className="flex items-center mb-4 justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl p-4 font-bold text">
            To-Do List (Using Next.js)
          </h1>
          <Link href="/new-task">
            <button className="btn btn-success text-base">+ New Task</button>
          </Link>
        </div>
      </header>
      <ul className="flex flex-col items-center pl-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            complete={todo.complete}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          >
            {todo.title}
          </TodoItem>
        ))}
      </ul>
    </>
  );
}
