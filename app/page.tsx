"use client"

import { Navbar } from "./components/Navbar/Navbar";


interface Task {
  id: string;
  title: string;
  priority: 'Low' | 'Medium' | 'High';
}

// Define the columns for our board
const columns = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-800' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-indigo-900/20' },
  { id: 'done', title: 'Done', color: 'bg-emerald-900/20' },
];

const mockTasks: Record<string, Task[]> = {
  todo: [
    { id: '1', title: 'Fix navbar mobile bug', priority: 'High' },
    { id: '2', title: 'Add dark mode toggle', priority: 'Medium' },
  ],
  'in-progress': [
    { id: '3', title: 'Designing Kanban UI', priority: 'High' },
  ],
  done: [
    { id: '4', title: 'Setup Next.js project', priority: 'Low' },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      
      <div className="p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Daily Tasks Board</h1>
          <p className="text-gray-400">Track your progress like a pro.</p>
        </header>

        {/* Kanban Board Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          {columns.map((column) => (
            <div 
              key={column.id} 
              className={`rounded-xl p-4 min-h-[500px] border border-white/5 ${column.color}`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-gray-200 uppercase tracking-wider text-sm">
                  {column.title}
                </h2>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                  {mockTasks[column.id].length}
                </span>
              </div>

              {/* Task Cards */}
              <div className="space-y-3">
                {mockTasks[column.id].map((task) => (
                  <div 
                    key={task.id} 
                    className="bg-gray-900 border border-white/10 p-4 rounded-lg shadow-sm hover:border-indigo-500/50 transition-colors cursor-pointer group"
                  >
                    <p className="text-sm font-medium text-gray-100 group-hover:text-indigo-300">
                      {task.title}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold ${
                        task.priority === 'High' ? 'bg-red-900/30 text-red-400' :
                        task.priority === 'Medium' ? 'bg-amber-900/30 text-amber-400' :
                        'bg-blue-900/30 text-blue-400'
                      }`}>
                        {task.priority}
                      </span>
                      <div className="h-6 w-6 rounded-full bg-gray-700 border border-white/10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
