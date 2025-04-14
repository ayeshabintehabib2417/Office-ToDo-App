import { useState } from 'react';
import './App.css';
import { DeleteFromList } from './ProjectList'; // Import only DeleteFromList

export default function App() {
  const initialProjects = [
    { id: 1, content: "SignUp on Hubstaff" },
    { id: 2, content: "Check Emails" },
    { id: 3, content: "Schedule meeting with Stakeholders" }
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [newTask, setNewTask] = useState(''); // State to manage the new task input

  // Function to delete a project
  function deleteProject(id) {
    setProjects((projects) => projects.filter((project) => project.id !== id)); // Filter out the project to be deleted
  }

  // Function to add a new task
  function addTask() {
    if (newTask.trim()) {
      const newProject = {
        id: projects.length + 1, // Assign a new id based on the current projects length
        content: newTask
      };
      setProjects([...projects, newProject]); // Add the new project to the list
      setNewTask(''); // Reset the input field
    }
  }

  return (
    <div className="project-container">
      <h1>Project ToDo App</h1>
      
      {/* Add New Task Section */}
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Update state as user types
        />
        <button onClick={addTask}>Add+</button> {/* Add button to trigger addTask */}
      </div>

      {/* Only display projects with the delete functionality */}
      <DeleteFromList projects={projects} deleter={deleteProject} />
    </div>
  );
}
