import React, { useState } from "react";
import "./App.css";

function ProjectQuoteForm() {
  const [formData, setFormData] = useState({
    projectName: "",
    customerName: "",
    projectSize: "",
    dueDate: "",
    estimatedCost: "",
  });

  const [submittedQuote, setSubmittedQuote] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedQuote(formData);
  }

  return (
    <div className="quote-page">
      <h1>Project Quote Form</h1>

      <form className="quote-form" onSubmit={handleSubmit}>
        <label>
          Project Name
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Example: Business Website Redesign"
            required
          />
        </label>

        <label>
          Customer Name
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Example: ABC Landscaping"
            required
          />
        </label>

        <label>
          Project Size
          <select
            name="projectSize"
            value={formData.projectSize}
            onChange={handleChange}
            required
          >
            <option value="">Select a size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <label>
          Due Date
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Estimated Cost
          <input
            type="number"
            name="estimatedCost"
            value={formData.estimatedCost}
            onChange={handleChange}
            placeholder="Example: 2500"
            required
          />
        </label>

        <button type="submit">Create Quote</button>
      </form>

      {submittedQuote && (
        <div className="quote-card">
          <h2>Submitted Project Quote</h2>

          <p>
            <strong>Project Name:</strong> {submittedQuote.projectName}
          </p>

          <p>
            <strong>Customer Name:</strong> {submittedQuote.customerName}
          </p>

          <p>
            <strong>Project Size:</strong> {submittedQuote.projectSize}
          </p>

          <p>
            <strong>Due Date:</strong> {submittedQuote.dueDate}
          </p>

          <p>
            <strong>Estimated Cost:</strong> ${submittedQuote.estimatedCost}
          </p>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return <ProjectQuoteForm />;
}