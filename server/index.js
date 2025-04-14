const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// In-memory data store
let projects = [
  { id: 1, content: 'DIP with Python' },
  { id: 2, content: 'FYP with undergrads' },
];

// GET all projects
app.get('/projects', (req, res) => {
  res.json(projects);
});

// POST create new project
app.post('/projects', (req, res) => {
  const newProject = {
    id: Date.now(),
    content: req.body.content,
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// DELETE a project
app.delete('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  projects = projects.filter(p => p.id !== id);
  res.json({ message: 'Project deleted' });
});

// PUT update a project
app.put('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedContent = req.body.content;
  const index = projects.findIndex(p => p.id === id);

  if (index !== -1) {
    projects[index].content = updatedContent;
    res.json(projects[index]);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
});

// Dashboard route
app.get('/admin/stats', (req, res) => {
  res.json({ totalProjects: projects.length });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});