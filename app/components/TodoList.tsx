import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface ToDoListProps {
  tasks: ITask[]
}


const TodoList: React.FC<ToDoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
        <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th className='dark:text-white'>Tasks</th>
          <th className='dark:text-white'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => 
        <Task key={task.id} task={task} />)}
      </tbody>
    </table>
    </div>
    );
};

export default TodoList;