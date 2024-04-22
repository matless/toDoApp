import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import ThemeSwitch from "./components/ThemeSwitch"; 
import { Providers } from "./providers";
import './globals.css';

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <AddTask />
        <div className="absolute top-0 right-0 m-4">
            <ThemeSwitch />
        </div>
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}