import React, { useState } from 'react';

export default function FeedbackForm() {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to store submission message
  const [submitted, setSubmitted] = useState(false);

  // Update form data when inputs change
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just mark submitted true
    setSubmitted(true);

    // In real app, send formData to backend here
    console.log('Feedback submitted:', formData);
  };

  // JSX for the form and thank you message
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Feedback Form</h2>
      
      {submitted ? (
        <p style={styles.thankYou}>Thank you for your feedback, {formData.name}!</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input
            style={styles.input}
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            style={styles.input}
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label style={styles.label} htmlFor="message">Message:</label>
          <textarea
            style={styles.textarea}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      )}
    </div>
  );
}

// CSS styles in JS object
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    resize: 'vertical',
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  thankYou: {
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  }
};
