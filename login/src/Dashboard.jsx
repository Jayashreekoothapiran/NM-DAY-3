import React from 'react';

export default function Dashboard({ userEmail, onLogout }) {
  return (
    <div style={styles.container}>
      <h2>Welcome, {userEmail}!</h2>
      <p>You are now logged in.</p>
      <button style={styles.button} onClick={onLogout}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#dc3545',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};
