import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Board.css';

const INITIAL_ISSUES = [
  { id: 'LIN-1', title: 'Setup auth flow', status: 'Todo', priority: 'High', assignee: 'Kirk' },
  { id: 'LIN-2', title: 'Fix mobile drawer overflow', status: 'In Progress', priority: 'Urgent', assignee: 'Kirk' },
  { id: 'LIN-3', title: 'Deploy to Vercel', status: 'Done', priority: 'Low', assignee: 'Kirk' }
];

function Board() {
  const [issues, setIssues] = useState(() => {
    const saved = localStorage.getItem('linear_issues');
    return saved ? JSON.parse(saved) : INITIAL_ISSUES;
  });

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Todo');

  useEffect(() => {
    localStorage.setItem('linear_issues', JSON.stringify(issues));
  }, [issues]);

  const handleCreateIssue = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newIssue = {
      id: `LIN-${issues.length + 1}`,
      title,
      status,
      priority,
      assignee: 'Kirk'
    };

    setIssues([newIssue, ...issues]);
    setTitle('');
  };

  const handleDeleteIssue = (id) => {
    setIssues(issues.filter((issue) => issue.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setIssues(
      issues.map((issue) =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      )
    );
  };

  const columns = ['Todo', 'In Progress', 'Done'];

  return (
    <div className="board-page">
      {/* Board Header */}
      <header className="board-header glass-panel">
        <div className="board-header-left">
          <Link to="/" className="back-link">← Back to Site</Link>
          <span className="logo-icon">◇</span>
          <h1>Workspace Issues</h1>
        </div>
        <span className="issue-count-badge">{issues.length} Issues</span>
      </header>

      {/* Create Issue Bar */}
      <section className="create-issue-container section-container">
        <form className="create-issue-form glass-panel" onSubmit={handleCreateIssue}>
          <input 
            type="text" 
            placeholder="Issue title (e.g. Design new CTA button)..." 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Urgent">🔴 Urgent</option>
            <option value="High">🟠 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🔵 Low</option>
          </select>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button type="submit" className="btn-primary">+ Add Issue</button>
        </form>
      </section>

      {/* Kanban Board Grid */}
      <main className="kanban-grid section-container">
        {columns.map((col) => (
          <div key={col} className="kanban-column glass-panel">
            <div className="column-header">
              <h3>{col}</h3>
              <span className="col-count">
                {issues.filter((i) => i.status === col).length}
              </span>
            </div>

            <div className="column-cards">
              {issues
                .filter((issue) => issue.status === col)
                .map((issue) => (
                  <div key={issue.id} className="issue-card">
                    <div className="card-top">
                      <span className="issue-id">{issue.id}</span>
                      <span className={`priority-tag ${issue.priority.toLowerCase()}`}>
                        {issue.priority}
                      </span>
                    </div>
                    <p className="card-title">{issue.title}</p>
                    <div className="card-bottom">
                      <select 
                        value={issue.status} 
                        onChange={(e) => handleStatusChange(issue.id, e.target.value)}
                        className="status-select"
                      >
                        <option value="Todo">Todo</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                      </select>
                      <button 
                        className="delete-btn" 
                        onClick={() => handleDeleteIssue(issue.id)}
                        title="Delete Issue"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Board;