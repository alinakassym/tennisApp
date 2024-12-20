import React from 'react';

const SessionPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Create a Tennis Session</h1>
      <form style={styles.form}>
        {/* Sport Center */}
        <div style={styles.formGroup}>
          <label htmlFor="sportCenter" style={styles.label}>Sport Center</label>
          <input type="text" id="sportCenter" placeholder="Enter sport center name" style={styles.input} />
        </div>

        {/* Time */}
        <div style={styles.formGroup}>
          <label htmlFor="time" style={styles.label}>Time</label>
          <input type="time" id="time" style={styles.input} />
        </div>

        {/* Day */}
        <div style={styles.formGroup}>
          <label htmlFor="day" style={styles.label}>Day</label>
          <input type="date" id="day" style={styles.input} />
        </div>

        {/* Location */}
        <div style={styles.formGroup}>
          <label htmlFor="location" style={styles.label}>Location</label>
          <input type="text" id="location" placeholder="Court number or area" style={styles.input} />
        </div>

        {/* Type of Game */}
        <div style={styles.formGroup}>
          <label htmlFor="gameType" style={styles.label}>Type of Game</label>
          <select id="gameType" style={styles.select}>
            <option value="singles">Singles</option>
            <option value="doubles">Doubles</option>
            <option value="practice">Practice</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>Create Session</button>
      </form>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#013220',
    color: '#FFD700',
    fontFamily: "'Georgia', serif",
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #FFD700',
    paddingBottom: '0.5rem',
  },
  form: {
    width: '90%',
    maxWidth: '400px',
    backgroundColor: '#FFFFFF',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#013220',
    fontWeight: 'bold' as const,
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #013220',
    borderRadius: '4px',
    boxSizing: 'border-box' as const,
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #013220',
    borderRadius: '4px',
    backgroundColor: '#FFFFFF',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    fontSize: '1.2rem',
    backgroundColor: '#FFD700',
    color: '#013220',
    fontWeight: 'bold' as const,
    textTransform: 'uppercase' as const,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default SessionPage;
